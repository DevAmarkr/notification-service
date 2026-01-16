import { IsArray, IsEnum, IsObject, IsString } from 'class-validator';

export enum NotificaitonChannel {
  EMAIL = 'email',
  SMS = 'sms',
}

export class CreateNotificationDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  eventType: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  userId: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsArray()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEnum(NotificaitonChannel, { each: true })
  channel: NotificaitonChannel;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsObject()
  payload: Record<string, any>;
}
