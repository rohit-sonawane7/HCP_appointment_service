import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { HttpExceptionFilter } from './middlewares/errorHandler';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.enableCors();
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(5005);
    Logger.log('Application is running on: http://localhost:5005', 'Bootstrap');
}

bootstrap();
