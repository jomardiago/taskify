import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8)
  password: string;
}
