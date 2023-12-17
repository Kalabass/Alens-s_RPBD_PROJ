import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export class Category{
    constructor(id: number, name: string){
        this.name = name;
        this.id = id;
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}