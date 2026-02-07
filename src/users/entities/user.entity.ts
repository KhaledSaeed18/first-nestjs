import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn() // Primary key column that auto-increments with each new user
    id: number;

    @Column() // Regular column to store the user's name
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    major: string;

    @Column()
    isActive: boolean;

    @CreateDateColumn() // Automatically set to the current date and time when a new user is created
    createdAt: Date;

    @UpdateDateColumn() // Automatically updated to the current date and time whenever the user record is updated
    updatedAt: Date;

    @DeleteDateColumn() // Automatically set to the current date and time when the user is soft-deleted (not actually removed from the database, but marked as deleted)
    deletedAt: Date;
}
