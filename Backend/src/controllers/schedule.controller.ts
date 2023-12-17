import { AppDataSource } from "../db/data-source";
import { Bus } from "../entities/Bus";
import { Category } from "../entities/Category";
import { Schedule } from "../entities/Schedule";
import { IRequestBusBody } from "../interfaces/bus.interface";
import { Request, Response } from "express";
import { IRequestScheduleBody } from "../interfaces/schedule.interface";
import { Driver } from "../entities/Driver";
import { Flight } from "../entities/flight";

const categoryRepository = AppDataSource.getRepository(Category);
const flightRepository = AppDataSource.getRepository(Flight);
const busRepository = AppDataSource.getRepository(Bus);
const driverRepository = AppDataSource.getRepository(Driver);
const sheduleRepository = AppDataSource.getRepository(Schedule);

export class SheduleController{
    async GetShedule(req: Request, res: Response){
        try {
            const schedule = await sheduleRepository.find({
                relations: ['bus', 'bus.category', 'driver', 'driver.categories' ,'flight'],
                order: {
                    id: "ASC",
                },
            });
            return res.status(200).json(schedule);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "error during getting schedule"});
        }
    }

    async CtreateSchedule(req: Request<{}, {}, IRequestScheduleBody>, res: Response){
        try {
            const {bus_id, driver_id, flight_id, time_from, time_to,} = req.body;

            const bus = await busRepository.findOne({
                where : {id: bus_id}
            });

            const driver = await driverRepository.findOne({
                where : {id: driver_id}
            });

            const flight = await flightRepository.findOne({
                where : {id: flight_id}
            });

            const schedule = new Schedule(time_from, time_to, bus, driver, flight);

            await sheduleRepository.save(schedule);

            schedule.bus = bus; schedule.driver = driver; schedule.flight = flight;  

            await sheduleRepository.save(schedule);
        
            return res.status(200).json(schedule);
        } catch (e) {
            if(e.message === "Driver has not category"){
                return res.status(403).json({message : "У водителя нет нужной категории"})
            }
            if(e.message === "Time is not valid"){
                return res.status(403).json({message : "У водителя уже есть рейс в это время"})
            }
            return res.status(400).json({message : "error during creating log"})
        }
    }
}