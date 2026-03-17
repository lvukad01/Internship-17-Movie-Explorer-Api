import { Controller, Get, Query,Param, ParseIntPipe, Patch, Body, Post, UseGuards } from '@nestjs/common';  
import { MoviesService } from './movies.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { CreateMovieDto } from './dto/create-movie.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @ApiOperation({ summary: 'Get movies with filter' })
  @ApiQuery({ name: 'genre', required: false })
  @ApiQuery({ name: 'search', required: false })

  findAll(@Query() query: { genre?: string; search?: string }) {
    return this.moviesService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get movie  details through ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

}
