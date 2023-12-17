import { Category } from "../entities/Category";

export interface IRequestDriverBody{
    name: string;
    surname: string;
    age: number;
    categories: number[]
}