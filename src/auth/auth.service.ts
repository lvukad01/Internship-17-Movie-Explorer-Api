import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt'
import {JwtService} from '@nestjs/jwt'
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    //DEPENDENCY INJECTION
    constructor(    
        private prisma: PrismaService,
        private jwtService: JwtService,
    ){}

    async register(data: RegisterDto){
        const hashedPassword=await bcrypt.hash(data.password,10)
        return this.prisma.user.create({
            data:{
                email: data.email,
                password: hashedPassword,
                role: 'USER',
            },
        })
    }

    async login(data: LoginDto){
        const user = await this.prisma.user.findUnique({
            where: {email: data.email}
        });

        if (!user) throw new UnauthorizedException('Wrong username or password');

        const isPasswordValid = await bcrypt.compare(data.password,user.password)
        if (!isPasswordValid) throw new UnauthorizedException('Wrong username or password')
    
        const payload = {sub: user.id, email: user.email, role: user.role};
        return{
            access_token: this.jwtService.sign(payload),
        }
    }

}
