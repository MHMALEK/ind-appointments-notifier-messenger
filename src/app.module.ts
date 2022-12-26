import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { TelegramModule } from './telegram/telegram.module';
import { SmsModule } from './sms/sms.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { MailerModule } from '@nestjs-modules/mailer';
import path from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MailerModule,
    TelegramModule,
    SmsModule,
    MailerModule.forRoot({
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
      template: {
        dir: path.join(process.env.PWD, 'templates/pages'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
      options: {
        partials: {
          dir: path.join(process.env.PWD, 'templates/partials'),
          options: {
            strict: true,
          },
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule {}
