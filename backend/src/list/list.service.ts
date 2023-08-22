import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ListService {
  private prisma = new PrismaClient();

  async findAllAccounts() {
    return this.prisma.accounts.findMany();
  }

  async findAllPlayers() {
    return this.prisma.proPlayers.findMany();
  }

  async findAllTeams() {
    return this.prisma.proTeams.findMany();
  }
}
