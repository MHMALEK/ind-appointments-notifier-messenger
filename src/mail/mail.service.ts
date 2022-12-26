import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  public sendMessage({ to, from, subject, text, html }): void {
    this.mailerService
      .sendMail({
        to, // list of receivers
        from, // sender address
        subject, // Subject line
        text, // plaintext body
        html, // HTML body content
      })
      .then(() => {
        return 'mail has been successfully sent';
      })
      .catch(() => {
        return 'send mail failed';
      });
  }
}
