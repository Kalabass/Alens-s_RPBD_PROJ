import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity('drivers')
export class Driver{
    constructor(name: string, surname: string, age: number){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    age: number

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[]

}