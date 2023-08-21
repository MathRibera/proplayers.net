import { Controller, Get } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('api/list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get('teams')
  findAllTeams() {
    return this.listService.findAllTeams();
  }
}
