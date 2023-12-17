import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('flights')
export class Flight{
    constructor(place_from: string, place_to: string, stop_count: number){
        this.place_from = place_from;
        this.place_to = place_to;
        this.stop_count = stop_count
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    place_from: string

    @Column()
    place_to: string

    @Column()
    stop_count: number
}