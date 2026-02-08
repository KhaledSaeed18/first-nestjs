import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('addresses')
export class Address {
    @PrimaryGeneratedColumn() // Primary key column that auto-increments with each new user
    id: number;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @OneToOne(() => User, (user) => user.address) // Define a one-to-one relationship with the User entity
    @JoinColumn()
    user: User; // This will create a foreign key column in the addresses table that references the users table
}
