import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

export class EmailDto {
  @IsDefined({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsDefined({ message: 'Message is required' })
  @IsNotEmpty({ message: 'Message cannot me empty' })
  @IsString()
  @MaxLength(2000, { message: 'Message is too long' })
  message: string;

  @IsDefined({ message: 'Name is required' })
  @IsNotEmpty({ message: 'Name cannot me empty' })
  @IsString()
  @MaxLength(500, { message: 'Name is too long' })
  name: string;
}
