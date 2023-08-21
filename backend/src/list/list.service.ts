import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ListService {
  private prisma = new PrismaClient();
  findAllTeams() {
    return this.prisma.proTeams.findMany();
  }
}
