import { AppDataSource } from "../db/data-source";
import { Bus } from "../entities/Bus";
import { Category } from "../entities/Category";
import { Driver } from "../entities/Driver";
import { IRequestBusBody } from "../interfaces/bus.interface";
import { IRequestDriverBody } from "../interfaces/driver.interfaces";
import { Request, Response } from "express";

const categoryRepository = AppDataSource.getRepository(Category);
const busRepository = AppDataSource.getRepository(Bus);

export class BusController{
    async GetBuses(req: Request, res: Response){
        try {
            const buses = await busRepository.find({
                relations: ['category'],
                order: {
                    id: "ASC",
                },
            });
            return res.status(200).json(buses);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "error during getting buses"});
        }
    }

    async CtreateBus(req: Request<{}, {}, IRequestBusBody>, res: Response){
        try {
            const {marka, category, mileage, number, seat_count} = req.body;

            const newCategory = await categoryRepository.findOne({
                where: {id: category}
            }) 

            const bus = new Bus(marka, number, mileage, seat_count, newCategory);

            await busRepository.save(bus);

            bus.category = newCategory;

            await busRepository.save(bus);

            return res.status(200).json(bus);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "error during creating bus"});
        }
    }

    // async CtreateDriver1(req: Request<{}, {}, IRequestDriverBody>, res: Response){
    //     try {
            
    //     } catch (e) {
    //         console.log(e);
    //         res.status(400).json({message: "error during creating driver"});
    //     }
    // }
}