import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MoviesService {
constructor(private prisma: PrismaService) {}


async findOne(id: number) {
return this.prisma.movie.findUnique({
where: { id },
include: { genres: true }
});
}

async findAll(query: {genre?:string; search?:string}){
    const {genre, search}=query;

    return this.prisma.movie.findMany({
        where:{
            title:{contains:search, mode:'insensitive'},
            genres:genre?{
                some:{name:genre}
            }:undefined,
        },
        include:{genres:true}
    })
}



}

