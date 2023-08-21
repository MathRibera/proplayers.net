import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Get } from '@nestjs/common/decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.testServer();
  }
}
