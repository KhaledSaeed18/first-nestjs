// src/users/users.module.ts
// UsersModule to encapsulate user-related components
// This module imports the UsersController and UsersService
// In nestjs, modules are used to organize code into cohesive blocks of functionality.

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    providers: [UsersService], // Register UsersService as a provider
    controllers: [UsersController], // Register UsersController as a controller
}) // Define the UsersModule using the @Module decorator
export class UsersModule {}
