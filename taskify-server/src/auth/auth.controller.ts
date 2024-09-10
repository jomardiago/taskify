import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/users/dtos/create-user.dto";
import { UsersService } from "src/users/users.service";
import { LoginDto } from "./dtos/login-dto";
import { RefreshJwtGuard } from "./guards/refresh.guard";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post("register")
  async registerUser(@Body() dto: CreateUserDto) {
    return await this.usersService.create(dto);
  }

  @Post("login")
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post("refresh")
  async refreshToken(@Request() req) {
    return await this.authService.refreshToken(req.user);
  }
}
