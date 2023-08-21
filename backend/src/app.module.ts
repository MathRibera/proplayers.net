import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CreateModule } from './create/create.module';
import { ListModule } from './list/list.module';

@Module({
  imports: [CreateModule, ListModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
