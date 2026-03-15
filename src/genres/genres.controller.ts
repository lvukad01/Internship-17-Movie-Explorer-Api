import { Controller, Get } from '@nestjs/common'; 
import { GenresService } from './genres.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('genres')
@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Get()
  @ApiOperation({ summary: 'Dohvati sve žanrove' })
  findAll() {
    return this.genresService.findAll();
  }
}