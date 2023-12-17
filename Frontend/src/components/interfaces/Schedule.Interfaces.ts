import { IBus } from "./Bus.interfaces";
import { IDriver } from "./Driver.Interfaces";
import { IFlight } from "./Flight,interface";

export interface ISchedule{
    id: number,
    time_from: Date,
    time_to: Date,
    bus: IBus,
    driver: IDriver,
    flight: IFlight
}

export interface IScheduleBody{
    time_from: Date,
    time_to: Date,
    driver_id: number,
    bus_id: number,
    flight_id: number
}