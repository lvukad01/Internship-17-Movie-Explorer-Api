import { Controller,Get, UseGuards, Req } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({summary:'Get favorites'})
  findAll(@Req() req){
    const userId=req.user.userId
    return this.favoritesService.findAll(userId);
  }
}
