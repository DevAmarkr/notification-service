import {
  IsArray,
  IsEnum,
  IsObject,
  IsString,
  IsOptional,
} from 'class-validator';

export enum NotificaitonChannel {
  EMAIL = 'email',
  SMS = 'sms',
}

export enum NotificationPriority {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
}

export class CreateNotificationDto {
  @IsString()
  eventType: string;

  @IsString()
  userId: string;

  @IsArray()
  @IsEnum(NotificaitonChannel, { each: true })
  channel: NotificaitonChannel[];

  @IsObject()
  payload: Record<string, any>;

  @IsOptional()
  metadata: {
    priority?: NotificationPriority;
    source?: string;
  };
}
