import { Injectable, NotFoundException } from "@nestjs/common";

import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, createCategoryDto: CreateCategoryDto) {
    return await this.prisma.category.create({
      data: {
        ...createCategoryDto,
        userId,
      },
    });
  }

  async findAll(userId: number) {
    return await this.prisma.category.findMany({
      where: {
        userId,
      },
    });
  }

  async findOne(id: number, userId: number) {
    const category = await this.prisma.category.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!category) throw new NotFoundException("Category does not exists");

    return category;
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
    userId: number,
  ) {
    await this.findOne(id, userId);

    return await this.prisma.category.update({
      data: updateCategoryDto,
      where: {
        id,
        userId,
      },
    });
  }

  async remove(id: number, userId: number) {
    await this.findOne(id, userId);

    return await this.prisma.category.delete({
      where: {
        id,
        userId,
      },
    });
  }
}
