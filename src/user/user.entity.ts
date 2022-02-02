import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text'})
    name: string;

    @Column({ type: 'varchar' , length: 10, unique: true})
    login: string;

    @Column({ type: 'text' })
    password: string;

    @Column({ type: 'text' })
    email: string;

    @Column({ type: 'boolean', default: false})
    banned: boolean;

    @Column({ type: 'text', default: "" })
    bannedReason: string;

    @Column({ type: 'integer', default: 1})
    role: number;
}