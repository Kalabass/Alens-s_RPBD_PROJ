import * as express from "express"
import { DriverController } from "../controllers/driver.controller";


const controller = new DriverController();

const router = express.Router();

router.post('/drivers', controller.CtreateDriver);

router.get('/drivers', controller.GetDrivers);

export {
    router as DriverRouter
}