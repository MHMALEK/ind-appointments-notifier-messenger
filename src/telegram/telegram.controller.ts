import { Controller, Get, Query } from '@nestjs/common';
import { SendTelegramMessageDTO } from './DTO/sendTelegramMessage.dto';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private telegramService: TelegramService) {}
  @Get('/send')
  sendMessage(@Query() parmas: SendTelegramMessageDTO) {
    const { message, chatId } = parmas;
    console.log(chatId, message);
    this.telegramService.sendMessage(chatId, message);
  }
}
