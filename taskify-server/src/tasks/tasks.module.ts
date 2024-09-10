import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { TasksService } from "./tasks.service";
import { TasksController } from "./tasks.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [TasksController],
  providers: [TasksService, PrismaService, JwtService],
})
export class TasksModule {}
