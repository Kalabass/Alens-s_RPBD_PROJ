import { AppDataSource } from "../db/data-source";
import { Flight } from "../entities/flight";
import { Request, Response } from "express";

const flightRepository = AppDataSource.getRepository(Flight);

export class FlightController{
    async GetFlights(req: Request, res: Response){
        try {
            const flights = await flightRepository.find({
                order: {
                    id: "ASC",
                },
            });
            return res.status(200).json(flights);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "error during getting flights"});
        }
    }
}