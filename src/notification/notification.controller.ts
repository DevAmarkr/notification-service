import { Controller, Get } from '@nestjs/common';

@Controller('notification')
export class NotificationController {
  @Get('health')
  health() {
    return { status: 'Ok' };
  }
}
