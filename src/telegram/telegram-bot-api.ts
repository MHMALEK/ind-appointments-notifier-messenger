import { ParseMode } from 'grammy/out/types.node';
import { telegramBot } from 'src/telegram-bot/telegram-bot.service';

const onCommandListener = (commandName, commandCallback) => {
  telegramBot.command(commandName, (ctx) => {
    commandCallback(ctx);
  });
};

const sendMessage = (
  chatId: string,
  message: string,
  parse_mode: ParseMode = 'HTML',
) => {
  telegramBot.api.sendMessage(chatId, message, { parse_mode });
};

const telegramBotApi = {
  onCommandListener,
  sendMessage,
};
export { telegramBotApi };
