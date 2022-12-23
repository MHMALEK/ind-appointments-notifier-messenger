import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from './mailer/mailer.module';
import { MailerService } from './mailer/mailer.service';
import { TelegramModule } from './telegram/telegram.module';
import { SmsModule } from './sms/sms.module';
import { ConfigModule } from '@nestjs/config';
import { ContentModule } from './content/content.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MailerModule,
    TelegramModule,
    SmsModule,
    ContentModule,
  ],
  controllers: [AppController],
  providers: [AppService, MailerService],
})
export class AppModule {}
