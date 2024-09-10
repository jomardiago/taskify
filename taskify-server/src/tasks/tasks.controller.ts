import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from "@nestjs/common";
import { User } from "@prisma/client";

import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { JwtGuard } from "src/auth/guards/jwt.guard";

@UseGuards(JwtGuard)
@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @Request() req: { user: User }) {
    return this.tasksService.create(req.user.id, createTaskDto);
  }

  @Get()
  findAll(@Request() req: { user: User }) {
    return this.tasksService.findAll(req.user.id);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Request() req: { user: User }) {
    return this.tasksService.findOne(+id, req.user.id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @Request() req: { user: User },
  ) {
    return this.tasksService.update(+id, updateTaskDto, req.user.id);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Request() req: { user: User }) {
    return this.tasksService.remove(+id, req.user.id);
  }
}
