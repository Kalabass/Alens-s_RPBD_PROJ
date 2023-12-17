import { ICategory } from "./Category.Interfaces";

export interface IBus{
    id: number,
    marka: string,
    number: string,
    mileage: number,
    category: ICategory
}