import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationService {
  create(dto: CreateNotificationDto) {
    return {
      notificationId: `notif_${Date.now()}`,
      status: 'ACCEPTED',
    };
  }
}
