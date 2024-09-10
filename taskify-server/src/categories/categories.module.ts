import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { CategoriesService } from "./categories.service";
import { CategoriesController } from "./categories.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService, JwtService],
})
export class CategoriesModule {}
