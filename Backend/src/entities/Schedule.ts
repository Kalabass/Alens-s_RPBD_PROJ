import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bus } from "./Bus";
import { Driver } from "./Driver";
import { Flight } from "./flight";


@Entity('schedule')
export class Schedule{
    constructor(time_from: Date, time_to: Date, bus: Bus, driver: Driver, flight: Flight){
        this.time_from = time_from;
        this.time_to = time_to;
        this.bus = bus;
        this.driver = driver;
        this.flight = flight;
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    time_from: Date

    @Column()
    time_to: Date

    @ManyToOne(() => Bus)
    bus: Bus

    @ManyToOne(() => Driver)
    driver: Driver

    @ManyToOne(() => Flight)
    flight: Flight
}