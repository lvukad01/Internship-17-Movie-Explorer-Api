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

    async create(userId:number,movieId:number){
        return this.prisma.favorite.create({
            data:{
                userId:userId,
                movieId:movieId,
            },
        })
    }

    async remove(userId:number,movieId:number){
        return this.prisma.favorite.delete({
            where: {
                userId_movieId: { 
                    userId: userId,
                    movieId: movieId,
                },
            }
        })
    }
}
