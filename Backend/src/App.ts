import * as express from "express";
import * as morgan from "morgan"
import * as bodyParser from "body-parser"
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import { DriverRouter } from "./routers/driver.router";
import { BusRouter } from "./routers/bus.router";
import { SheduleRouter } from "./routers/schedule.router";
import { FlightRouter } from "./routers/flight.router";

const app = express();
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,DELETE, PUT',
    credentials: true
}));

app.use('/upload', express.static('/backend/src/images'));
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.options('*', cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(DriverRouter, BusRouter, SheduleRouter, FlightRouter);


export default app;