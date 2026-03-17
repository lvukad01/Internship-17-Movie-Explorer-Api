import { IsEmail, IsNotEmpty, MinLength} from 'class-validator'

export class RegisterDto{
    @IsEmail({},{message: 'Please enter valid email format'})
    email: string;

    @IsNotEmpty()
    @MinLength(6, {message: 'Password should have at least 6 characters'})
    password: string;

    
}