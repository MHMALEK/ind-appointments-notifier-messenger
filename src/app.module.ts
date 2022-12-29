import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramModule } from './telegram/telegram.module';
import { SmsModule } from './sms/sms.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './mail/mail.service';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MailModule,
    TelegramModule,
    SmsModule,
    MailerModule.forRoot({
      defaults: {
        from: process.env.MAIL_SMPT_USER,
      },
      transport: {
        service: 'gmail',
        auth: {
          user: process.env.MAIL_SMPT_USER,
          pass: process.env.MAIL_SMPT_PASSWORD,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule {}
