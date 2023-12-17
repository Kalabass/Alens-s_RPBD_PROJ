import * as express from "express"
import { SheduleController } from "../controllers/schedule.controller";
const controller = new SheduleController();

const router = express.Router();

router.get('/schedule', controller.GetShedule);

router.post('/schedule', controller.CtreateSchedule);

export {
    router as SheduleRouter
}