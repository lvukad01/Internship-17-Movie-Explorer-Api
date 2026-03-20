import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    exceptionFactory: (errors) => {
    const messages = errors.map((error) => 
          error.constraints ? Object.values(error.constraints)[0] : 'Validation error'
        );
      return new BadRequestException(messages); 
    },
  }));
  app.enableCors();
  await app.listen(3000);
}
bootstrap();