import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToOne,
} from 'typeorm';
import { Address } from './address.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn() // Primary key column that auto-increments with each new user
    id: number;

    @Column({
        unique: true, // Ensure that the userName is unique across all users in the database
        nullable: false, // Ensure that the userName cannot be null in the database
    }) // Regular column to store the user's name
    userName: string;

    @Column({
        unique: true, // Ensure that the email is unique across all users in the database
        nullable: false, // Ensure that the email cannot be null in the database
    })
    email: string;

    @Column({ select: false }) // Exclude password from query results by default for security
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

    @OneToOne(() => Address, (address) => address.user) // Define a one-to-one relationship with the Address entity
    address: Address; // This will allow us to access the user's address through this property
}
