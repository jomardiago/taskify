import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";

import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, createTaskDto: CreateTaskDto) {
    try {
      const newTask = await this.prisma.task.create({
        data: {
          ...createTaskDto,
          userId,
        },
      });

      return newTask;
    } catch (error) {
      if (error.code === "P2002") {
        throw new ConflictException("Task with the same title already exists");
      } else {
        console.log(error);
        throw new InternalServerErrorException();
      }
    }
  }

  async findAll(userId: number) {
    return await this.prisma.task.findMany({
      where: {
        userId,
      },
    });
  }

  async findOne(id: number, userId: number) {
    const task = await this.prisma.task.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!task) throw new NotFoundException("Task does not exists");

    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto, userId: number) {
    await this.findOne(id, userId);

    return await this.prisma.task.update({
      data: updateTaskDto,
      where: {
        id,
        userId,
      },
    });
  }

  async remove(id: number, userId: number) {
    await this.findOne(id, userId);

    return await this.prisma.task.delete({
      where: {
        id,
        userId,
      },
    });
  }
}
