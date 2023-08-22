import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ListService {
  private prisma = new PrismaClient();

  async findAllAccounts() {
    return this.prisma.accounts.findMany();
  }

  async findPlayerById(id: number) {
    return this.prisma.proPlayers.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findAllPlayers() {
    return this.prisma.proPlayers.findMany({
      include: {
        team: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async findAllTeams() {
    return this.prisma.proTeams.findMany();
  }
}
