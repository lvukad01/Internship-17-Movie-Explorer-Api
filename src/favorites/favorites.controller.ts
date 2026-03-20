import { Controller,Get, UseGuards, Req, Post, Body, Delete, Param, ParseIntPipe } from '@nestjs/common';
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

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({summary:'Add movie to favorites'})
  create(@Req() req, @Body('movieId') movieId:number){
    const userId=req.user.userId;
    return this.favoritesService.create(userId,movieId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':movieId')
  @ApiOperation({summary:'Delete movie from favorites'})
  remove(@Req() req, @Param('movieId',ParseIntPipe) movieId:number){
    const userId=req.user.userId;
    return this.favoritesService.remove(userId,movieId);
  }

  
  
}
