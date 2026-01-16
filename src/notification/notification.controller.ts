import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller('notifications')
export class NotificationController {
  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body() dto: CreateNotificationDto) {
    return {
      notificationId: `notif_${Date.now()}`,
      status: 'ACCEPTED',
      data: dto,
    };
  }
}
