import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt'
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ){}

    async register(data: any){
        const hashedPassword=await bcrypt.hash(data.password,10)
        return this.prisma.user.create({
            data:{
                email: data.email,
                password: hashedPassword,
                role: data.role||'USER',
            },
        })
    }
}
