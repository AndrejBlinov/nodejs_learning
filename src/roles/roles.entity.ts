import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm';
import { UserRoles } from './user-roles-entity';


@Entity()
export class Roles  {
    @ApiProperty({ example: '1', description: "Уникальный идентификатор роли" })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Администратор', description: "Наименование роли" })
    @Column({ type: 'text'})
    name: string;

    @ApiProperty({ example: '2', description: "Идентификатор роли" })
    @Column( {type: 'varchar' , length: 10, unique: true} )
    value: number;

}