import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Schedule } from "./Schedule";

@Entity('journal')
export class Journal{
    constructor(schedule: Schedule){
        this.schedule = schedule;
    }

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Schedule)
    schedule: Schedule;
}