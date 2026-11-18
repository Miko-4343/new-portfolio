import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service.js';
import { EmailDto } from '../dto/email.dto.js';

@Controller('contact')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async send(@Body() data: EmailDto) {
    const res = await this.emailService.sendEmail(data);

    if (res.error) {
      return { message: res.error.message || 'Failed to send email' };
    }

    return { message: 'Email sent successfully' };
  }
}
