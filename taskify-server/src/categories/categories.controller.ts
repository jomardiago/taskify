import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from "@nestjs/common";
import { User } from "@prisma/client";

import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { JwtGuard } from "src/auth/guards/jwt.guard";

@UseGuards(JwtGuard)
@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(
    @Request() req: { user: User },
    @Body() createCategoryDto: CreateCategoryDto,
  ) {
    return this.categoriesService.create(req.user.id, createCategoryDto);
  }

  @Get()
  findAll(@Request() req: { user: User }) {
    return this.categoriesService.findAll(req.user.id);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Request() req: { user: User }) {
    return this.categoriesService.findOne(+id, req.user.id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Request() req: { user: User },
  ) {
    return this.categoriesService.update(+id, updateCategoryDto, req.user.id);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Request() req: { user: User }) {
    return this.categoriesService.remove(+id, req.user.id);
  }
}
