import { IsEmail, IsNotEmpty, MaxLength, MinLength} from 'class-validator'

export class RegisterDto{
    @IsEmail({},{message: 'Please enter valid email format'})
    @MaxLength(50, { message: 'Email is too long (max 50 characters)' })
    email: string;

    @IsNotEmpty()
    @MinLength(6, {message: 'Password should have at least 6 characters'})
    password: string;

    
}