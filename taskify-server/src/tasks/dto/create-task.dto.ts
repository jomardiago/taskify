import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

enum Status {
  NEW = "new",
  INPROGRESS = "in progress",
  COMPLETED = "completed",
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description: string;

  @IsEnum(Status)
  @IsOptional()
  status: string;

  @IsNumber()
  categoryId: number;
}
