// src/main.ts
// Entry point of the NestJS application
// This file bootstraps the application by creating an instance of the AppModule
// In nestjs, the main.ts file is responsible for starting the application.

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
