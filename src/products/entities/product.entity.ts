import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn() // Primary key column that auto-increments with each new product
    id: number;

    @Column({
        nullable: false, // Ensure that the name cannot be null in the database
    })
    name: string;

    @Column({
        nullable: false, // Ensure that the description cannot be null in the database
    })
    description: string;

    @Column('decimal', {
        nullable: false, // Ensure that the price cannot be null in the database
    })
    price: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
