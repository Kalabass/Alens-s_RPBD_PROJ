import { AppDataSource } from "../db/data-source";
import { Category } from "../entities/Category";
import { Driver } from "../entities/Driver";
import { IRequestDriverBody } from "../interfaces/driver.interfaces";
import { Request, Response } from "express";

const categoryRepository = AppDataSource.getRepository(Category);
const driverRepository = AppDataSource.getRepository(Driver);

export class DriverController{
    async GetDrivers(req: Request, res: Response){
        try {
            const drivers = await driverRepository.find({
                relations: ['categories'],
                order: {
                    id: "ASC",
                },
            });
            return res.status(200).json(drivers);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "error during getting drivers"});
        }
    }

    async CtreateDriver(req: Request<{}, {}, IRequestDriverBody>, res: Response){
        try {
            const {name, surname, age, categories} = req.body;
            
            let newCategories: Category[] = [];

            
            categories.forEach( async (cat) => {
                const category = await categoryRepository.findOne({
                    where : {id : cat}
                })
                if(category)
                    newCategories.push(category);
            })

            const driver = new Driver(name, surname, age);
            await driverRepository.save(driver);
            driver.categories = newCategories; 
            await driverRepository.save(driver);
            
            return res.status(200).json(driver);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "error during creating driver"});
        }
    }

    async CtreateDriver1(req: Request<{}, {}, IRequestDriverBody>, res: Response){
        try {
            
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "error during creating driver"});
        }
    }
}