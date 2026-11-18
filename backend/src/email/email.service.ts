import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Resend } from 'resend';
import { ConfigService } from '@nestjs/config';
import { EmailDto } from '../dto/email.dto.js';

@Injectable()
export class EmailService {
  private resend: Resend;

  constructor(private config: ConfigService) {
    const key = this.config.get<string>('RESEND_KEY');
    if (!key) throw new Error('RESEND_KEY is missing in .env');
    this.resend = new Resend(key);
  }

  async sendEmail(data: EmailDto) {
    try {
      const result = await this.resend.emails.send({
        from: 'Contact Form <noreply@kosmiha.eu>',
        replyTo: data.email,
        to: 'miha.test12@gmail.com',
        subject: 'New message from portfolio website',
        html: `<p>${data.message}</p><p>From: ${data.name}</p>`,
      });
      return result;
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException('Failed to send email');
    }
  }
}
