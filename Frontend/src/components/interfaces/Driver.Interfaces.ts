import { ICategory } from "./Category.Interfaces";

export interface IDriver{
    id: number;
    name: string,
    surname: string,
    age: number,
    categories: ICategory[]
}