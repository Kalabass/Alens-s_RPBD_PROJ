import axios from "axios";
import { IDriver } from "../components/interfaces/Driver.Interfaces";

class DriversService{
    private Url = 'http://localhost:8975/drivers';
    async getAll(){
        return axios.get<IDriver[]>(this.Url);
    }
}

export default new DriversService()