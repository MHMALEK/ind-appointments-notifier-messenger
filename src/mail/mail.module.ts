import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import * as dotenv from 'dotenv';
dotenv.config();
console.log(process.env.MAIL_SMPT_USER, process.env.MAIL_SMPT_PASSWORD);
@Module({
  providers: [MailService],
  imports: [
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
  controllers: [MailController],
})
export class MailModule {}
