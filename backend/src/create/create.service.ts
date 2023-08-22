import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CreateService {
  private prisma = new PrismaClient();

  async createAccount({
    nickName,
    server,
    region,
    puuid,
    proId,
    auth,
  }: {
    nickName: string;
    server: string;
    region: string;
    puuid: string;
    proId: string;
    auth: string;
  }) {
    if (auth !== 'secret') {
      return { message: 'Not authorized' };
    } else {
      return this.prisma.accounts.create({
        data: {
          nickName,
          server,
          region,
          puuid,
          proId: +proId,
        },
      });
    }
  }

  async createProPlayer({
    name,
    country,
    image,
    nick,
    teamId,
    role,
    age,
    auth,
  }: {
    name: string;
    country: string;
    image: string;
    nick: string;
    teamId: string;
    role: string;
    age: string;
    auth: string;
  }) {
    if (auth !== 'secret') {
      return { message: 'Not authorized' };
    } else {
      return this.prisma.proPlayers.create({
        data: {
          name,
          country,
          image,
          nick,
          teamId: +teamId,
          role,
          age,
        },
      });
    }
  }
}
