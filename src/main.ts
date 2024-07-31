import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation pipe to automatically validate incoming requests based on DTOs
  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS if necessary
  app.enableCors();

  // Start the server
  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
}

bootstrap();
