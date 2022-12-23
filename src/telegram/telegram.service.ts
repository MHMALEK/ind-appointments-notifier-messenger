import { HttpException, Injectable } from '@nestjs/common';
import { Bot } from 'grammy';
import { ParseMode } from 'grammy/out/types.node';
import { telegramBotApi } from './telegram-bot-api';
@Injectable()
export class TelegramService {
  async sendMessage(
    chatId: string,
    message: string,
    parse_mode: ParseMode = 'HTML',
  ) {
    console.log('asdsd');
    try {
      await telegramBotApi.sendMessage(chatId, message, parse_mode);
      return 'message sent successfully';
    } catch (e) {
      return new HttpException('Send message failed.', 500);
    }
  }
}
