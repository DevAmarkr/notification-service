import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}
  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body() dto: CreateNotificationDto) {
    return this.notificationService.create(dto);
  }
}
