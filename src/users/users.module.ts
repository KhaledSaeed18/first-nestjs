// src/users/users.module.ts
// UsersModule to encapsulate user-related components
// This module imports the UsersController and UsersService
// In nestjs, modules are used to organize code into cohesive blocks of functionality.

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
    providers: [UsersService], // Register UsersService as a provider
    controllers: [UsersController], // Register UsersController as a controller
    exports: [UsersService], // Export UsersService to make it available for injection in other modules if needed
    imports: [TypeOrmModule.forFeature([User])], // Import TypeOrmModule and register the User entity for database operations
}) // Define the UsersModule using the @Module decorator
export class UsersModule {}
