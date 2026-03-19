import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FavoritesService {
    constructor(private prisma: PrismaService) {}

    async findAll(userId: number){
        return this.prisma.favorite.findMany({
            where:{userId},
            include:{movie:true}
        })
    }
}
