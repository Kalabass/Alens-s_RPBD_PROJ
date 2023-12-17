import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity('buses')
export class Bus{
    constructor(marka: string, number: string, mileage: number, seat_count: number, category: Category){
        this.marka = marka;
        this.number = number;
        this.mileage = mileage;
        this.seat_count = seat_count;
        this.category = category;
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    marka: string

    @Column()
    number: string

    @Column()
    mileage: number

    @Column()
    seat_count: number

    @OneToOne(() => Category)
    @JoinColumn()
    category: Category;
}