import * as express from "express"
import { BusController } from "../controllers/bus.controller";
import { FlightController } from "../controllers/flight.controller";


const controller = new FlightController();

const router = express.Router();

router.get('/flights', controller.GetFlights);

export {
    router as FlightRouter
}