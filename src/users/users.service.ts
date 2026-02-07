// src/users/users.service.ts
// UsersService to handle business logic related to users
// This service provides methods for CRUD operations on users

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
// The @Injectable() decorator marks the class as a provider that can be injected into other components (like controllers) in NestJS
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    // The getAll method retrieves all users, optionally filtering by name if a query parameter is provided
    async getAll(name?: string): Promise<User[]> {
        if (name) {
            return this.usersRepository.find({
                where: { userName: Like(`%${name}%`) },
            });
        }
        return this.usersRepository.find();
    }

    // The findOne method retrieves a single user by their ID. If the user is not found, it throws a NotFoundException, which results in a 404 HTTP response.
    async findOne(id: number): Promise<User> {
        const user = await this.usersRepository.findOne({ where: { id } });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    // The create method adds a new user to the database. It creates a new user entity and saves it to the database.
    async create(body: CreateUserDto): Promise<User> {
        const user = this.usersRepository.create(body);
        return this.usersRepository.save(user);
    }

    // The update method modifies an existing user's data. It first finds the user to be updated. If the user is not found, it throws a NotFoundException. If the user is found, it updates the user's properties with the new values provided in the request body, while keeping existing values if new ones are not provided. Finally, it returns the updated user object.
    async update(id: number, body: UpdateUserDto): Promise<User> {
        const user = await this.findOne(id);
        Object.assign(user, body);
        return this.usersRepository.save(user);
    }

    // The delete method soft-deletes a user from the database. It finds the user to be deleted. If the user is not found, it throws a NotFoundException. If the user is found, it performs a soft delete which sets the deletedAt timestamp.
    async delete(id: number): Promise<void> {
        const user = await this.findOne(id);
        await this.usersRepository.softRemove(user);
    }
}
