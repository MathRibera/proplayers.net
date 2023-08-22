import { Controller, Get, Query } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('api/list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get('accounts')
  findAllAccounts() {
    return this.listService.findAllAccounts();
  }

  @Get('players/:id')
  findPlayerById(@Query('id') id: string, @Query('nick') nick: string) {
    return this.listService.findPlayerById(+id, nick);
  }

  @Get('players')
  findAllPlayers() {
    return this.listService.findAllPlayers();
  }

  @Get('teams')
  findAllTeams() {
    return this.listService.findAllTeams();
  }
}
