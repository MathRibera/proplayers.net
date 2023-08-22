import { Controller, Get } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('api/list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get('accounts')
  findAllAccounts() {
    return this.listService.findAllAccounts();
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
