import { Injectable, UnauthorizedException } from "@nestjs/common";
import { compare } from "bcrypt";
import { JwtService } from "@nestjs/jwt";

import { LoginDto } from "./dtos/login-dto";
import { UsersService } from "src/users/users.service";

const EXPIRE_TIME = 5 * 60 * 60 * 1000;
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);

    const payload = {
      ...user,
    };

    return {
      user,
      backendTokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: "5h",
          secret: process.env.jwtAccessTokenSecretKey,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn: "7d",
          secret: process.env.jwtRefreshTokenSecretKey,
        }),
        expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
      },
    };
  }

  async validateUser(dto: LoginDto) {
    const user = await this.usersService.findByUsername(dto.username);

    if (user && (await compare(dto.password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException();
  }

  async refreshToken(user: any) {
    const { iat, exp, ...rest } = user;

    const payload = {
      ...rest,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: "5h",
        secret: process.env.jwtAccessTokenSecretKey,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: "7d",
        secret: process.env.jwtRefreshTokenSecretKey,
      }),
      expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
    };
  }
}
