import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma/prisma.service";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { TasksModule } from "./tasks/tasks.module";
import { CategoriesModule } from "./categories/categories.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    TasksModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
