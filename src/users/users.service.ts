// src/users/users.service.ts
// UsersService to handle business logic related to users
// This service provides methods for CRUD operations on users

import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
// The @Injectable() decorator marks the class as a provider that can be injected into other components (like controllers) in NestJS
export class UsersService {
    // The getAll method retrieves all users, optionally filtering by name if a query parameter is provided
    getAll(name?: string) {
        return name;
    }

    // The findOne method retrieves a single user by their ID. If the user is not found, it throws a NotFoundException, which results in a 404 HTTP response.
    findOne(id: number) {
        return id;
    }

    // The create method adds a new user to the in-memory array. It generates a new ID by taking the last user's ID and incrementing it by one. It then pushes the new user object into the users array and returns it.
    create(body: CreateUserDto) {
        return body;
    }

    // The update method modifies an existing user's data. It first finds the index of the user to be updated. If the user is not found, it throws a NotFoundException. If the user is found, it updates the user's properties with the new values provided in the request body, while keeping existing values if new ones are not provided. Finally, it returns the updated user object.
    update(id: string, body: UpdateUserDto) {
        return { id, ...body };
    }

    // The delete method removes a user from the in-memory array. It finds the index of the user to be deleted. If the user is not found, it throws a NotFoundException. If the user is found, it uses the splice method to remove the user from the array and returns the removed user.
    delete(id: string) {
        return id;
    }
}
