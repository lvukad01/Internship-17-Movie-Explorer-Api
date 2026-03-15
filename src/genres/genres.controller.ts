import { Controller } from '@nestjs/common';
import { GenresService } from './genres.service';
import {ApiTags, ApiOperation} from '@nestjs/swagger'

@ApiTags('genres')
@Controller('genres')
export class GenresController {}
