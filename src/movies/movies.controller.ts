import { Controller, Get, Query,Param, ParseIntPipe } from '@nestjs/common';  
import { MoviesService } from './movies.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @ApiOperation({ summary: 'Dohvati sve filmove uz mogućnost filtriranja' })
  @ApiQuery({ name: 'genre', required: false })
  @ApiQuery({ name: 'search', required: false })

  findAll(@Query() query: { genre?: string; search?: string }) {
    return this.moviesService.findAll(query);
  }
  @Get(':id')
  @ApiOperation({ summary: 'Dohvati detalje filma preko ID-a' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.findOne(id);
  }
}