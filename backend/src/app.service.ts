import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  testServer(): string {
    return 'Running NestJS Server';
  }
}
