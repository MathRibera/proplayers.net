import { Module } from '@nestjs/common';
import { CreateService } from './create.service';
import { CreateController } from './create.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CreateController],
  providers: [CreateService, PrismaService],
})
export class CreateModule {}
