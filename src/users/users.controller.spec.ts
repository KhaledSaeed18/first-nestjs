import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { UsersController } from './users.controller';

describe('UsersController', () => {
    let controller: UsersController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
        }).compile();

        controller = module.get<UsersController>(UsersController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('getUsers', () => {
        it('should return all users (id and name only)', () => {
            const users = controller.getUsers();
            expect(users).toHaveLength(2);
            expect(users[0]).toEqual({ id: 1, name: 'John Doe' });
        });

        it('should filter users by name', () => {
            const users = controller.getUsers('john');
            expect(users).toHaveLength(1);
            expect(users[0].name).toBe('John Doe');
        });
    });

    describe('getUserById', () => {
        it('should return a user by id', () => {
            const user = controller.getUserById(1);
            expect(user).toEqual({
                id: 1,
                name: 'John Doe',
                email: 'john.doe@example.com',
                age: 30,
            });
        });

        it('should throw NotFoundException for invalid id', () => {
            expect(() => controller.getUserById(999)).toThrow(
                NotFoundException,
            );
        });
    });

    describe('createUser', () => {
        it('should create a new user', () => {
            const newUser = {
                name: 'Test User',
                email: 'test@example.com',
                age: 28,
            };
            const result = controller.createUser(newUser);
            expect(result).toEqual({ message: 'User created successfully' });
        });
    });

    describe('updateUser', () => {
        it('should update an existing user', () => {
            const updateData = { name: 'Updated Name' };
            const result = controller.updateUser(1, updateData);
            expect(result).toEqual({ message: 'User updated successfully' });
        });

        it('should throw NotFoundException for invalid id', () => {
            expect(() => controller.updateUser(999, { name: 'Test' })).toThrow(
                NotFoundException,
            );
        });
    });

    describe('deleteUser', () => {
        it('should delete a user', () => {
            const result = controller.deleteUser(1);
            expect(result).toEqual({ message: 'User deleted successfully' });
        });

        it('should throw NotFoundException for invalid id', () => {
            expect(() => controller.deleteUser(999)).toThrow(NotFoundException);
        });
    });
});
