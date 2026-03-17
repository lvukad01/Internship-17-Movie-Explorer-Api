import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';


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

async create(data: CreateMovieDto) {
  const { genre, ...movieData } = data;

  return this.prisma.movie.create({
    data: {
      title: movieData.title,
      year: movieData.year,
      director: movieData.director,
      posterUrl: movieData.posterUrl,
      description: movieData.description ?? " ", 
      genres: {
        connectOrCreate: genre.map((name) => ({
          where: { name: name },
          create: { name: name },
        })),
      },
    },
    include: {
      genres: true,
    },
  });
}
}



