import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("utils")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("check-health")
  checkHealth(): string {
    return this.appService.checkHealth();
  }
}
