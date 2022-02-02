import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User  {
    @ApiProperty({ example: '1', description: "Уникальный идентификатор" })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Вася', description: "Имя пользователя (ФИО)" })
    @Column({ type: 'text'})
    name: string;

    @ApiProperty({ example: 'Вася12653_', description: "Уникальный логин пользователя. Длинна 10 символов." })
    @Column({ type: 'varchar' , length: 10, unique: true})
    login: string;

    @ApiProperty({ example: 'Вася12653_', description: "Пароль пользователя" })
    @Column({ type: 'text' })
    password: string;

    @ApiProperty({ example: 'Вася12@yandex.ru', description: "Почтовый ящик польователя" })
    @Column({ type: 'text' })
    email: string;

    @ApiProperty({ example: 'true/false', description: "boolean идентификатор блокировки пользователя." })
    @Column({ type: 'boolean', default: false})
    banned: boolean;

    @ApiProperty({ example: 'Плохое поведение', description: "Причина блокировки. Строка" })
    @Column({ type: 'text', default: "" })
    bannedReason: string;

    @ApiProperty({ example: '2', description: "ID Роли пользователя" })
    @Column({ type: 'integer', default: 1})
    role: number;
}