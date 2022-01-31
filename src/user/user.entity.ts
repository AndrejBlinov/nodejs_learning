import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    banned: boolean;

    @Column()
    bannedReason: string
}