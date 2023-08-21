import { Controller, Post, Body } from '@nestjs/common';
import { CreateService } from './create.service';
import { PrismaService } from '../prisma.service';

@Controller('api/create')
export class CreateController {
  constructor(
    private readonly createService: CreateService,
    private prismaService: PrismaService,
  ) {}

  @Post('team')
  async createTeam(
    @Body('name') name: string,
    @Body('country') country: string,
    @Body('image') image: string,
    @Body('auth') auth: string,
  ) {
    if (auth !== 'secret') {
      return { message: 'Not authorized' };
    } else {
      await this.prismaService.proTeams.create({
        data: {
          name,
          country,
          image,
        },
      });
      return { message: 'Team created' };
    }
  }

  @Post('players')
  async createPlayer(
    @Body('name') name: string,
    @Body('country') country: string,
    @Body('image') image: string,
    @Body('nick') nick: string,
    @Body('teamId') teamId: number,
    @Body('role') role: string,
    @Body('age') age: number,
    @Body('auth') auth: string,
  ) {
    if (auth !== 'secret') {
      return { message: 'Not authorized' };
    } else {
      await this.createService.createProPlayer({
        name,
        country,
        image,
        nick,
        teamId,
        role,
        age,
        auth,
      });
      return { message: 'Player created' };
    }
  }
}
