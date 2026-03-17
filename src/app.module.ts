import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { GenresModule } from './genres/genres.module';
import { PrismaModule } from './prisma.module';
import { AuthModule } from './auth/auth.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [MoviesModule, GenresModule,PrismaModule, AuthModule, FavoritesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
