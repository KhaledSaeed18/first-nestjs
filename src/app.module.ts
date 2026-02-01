// src/app.module.ts
// AppModule to configure the main application module
// This module imports the ProductsModule and UsersModule
// In nestjs, the root module is used to organize the application structure.

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [ProductsModule, UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
