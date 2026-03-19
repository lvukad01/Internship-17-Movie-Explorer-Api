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

async findAll(query: {genres?:string; search?:string}){
    const {genres, search}=query;

    return this.prisma.movie.findMany({
        where:{
            title:{contains:search, mode:'insensitive'},
            genres:genres?{
                some:{name:genres}
            }:undefined,
        },
        include:{genres:true}
    })
}

async create(data: CreateMovieDto) {
  const { genres, ...movieData } = data;

  return this.prisma.movie.create({
    data: {
      title: movieData.title,
      year: movieData.year,
      director: movieData.director,
      posterUrl: movieData.posterUrl,
      description: movieData.description ?? " ", 
      genres: {
        connectOrCreate: genres.map((name) => ({
          where: { name: name },
          create: { name: name },
        })),
      },
    rating:Number(movieData.rating),
    video: movieData.video ?? " ",
    },
    include: {
      genres: true,
    },
  });
}
}



