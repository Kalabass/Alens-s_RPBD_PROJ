import { DataSource } from "typeorm";
import { Bus } from "../entities/Bus";
import { Driver } from "../entities/Driver";
import { Category } from "../entities/Category";
import { Schedule } from "../entities/Schedule";
import { Flight } from "../entities/flight";
import { Journal } from "../entities/journal";

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 3000,
//     username: "postgres",
//     password: "kalabass2299657",
//     database: "alen",
//     synchronize: true,
//     logging: false,
//     entities: [Bus, Driver, Category, Flight, Journal, Schedule],
//     migrations: [],
//     subscribers: [],
// })

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "pgdb.uni-dubna.ru",
    port: 5432,
    username: "students_2221_1",
    password: "ycat1488",
    database: "students_2221_1",
    synchronize: true,
    logging: false,
    entities: [Bus, Driver, Category, Flight, Journal, Schedule],
    migrations: [],
    subscribers: [],
})