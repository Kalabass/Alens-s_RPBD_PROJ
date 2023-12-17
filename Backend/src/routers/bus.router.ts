import * as express from "express"
import { BusController } from "../controllers/bus.controller";


const controller = new BusController();

const router = express.Router();

router.post('/buses', controller.CtreateBus);

router.get('/buses', controller.GetBuses);

export {
    router as BusRouter
}