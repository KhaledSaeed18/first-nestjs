// src/app.module.ts
// AppModule to configure the main application module
// This module imports the ProductsModule and UsersModule
// In nestjs, the root module is used to organize the application structure.

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
// TypeOrmModule is imported to set up a connection to a PostgreSQL database.
// The configuration includes the database type, host, port, username, password, and database name.
// The synchronize: true' allows TypeORM to automatically synchronize the database schema with the entities defined in the application (use with caution in production).

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true, // Make the configuration available globally across the application
        }),
        ProductsModule,
        UsersModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: configService.get<'postgres'>('DB_TYPE'),
                host: configService.get<string>('DB_HOST'),
                port: configService.get<number>('DB_PORT'),
                username: configService.get<string>('DB_USERNAME'),
                password: configService.get<string>('DB_PASSWORD'),
                database: configService.get<string>('DB_DATABASE'),
                entities: [],
                autoLoadEntities: true, // Automatically load entities from the project
                synchronize: true, // ! In development only
                retryAttempts: 5, // Optional: number of retry attempts for database connection
                logging: true, // Optional: enable logging of database queries and operations
                logger: 'advanced-console', // Optional: use advanced console logger for better logging of database operations
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
