import { Controller, Get, Query,Param, ParseIntPipe, Patch, Body } from '@nestjs/common';  
import { MoviesService } from './movies.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

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

}
