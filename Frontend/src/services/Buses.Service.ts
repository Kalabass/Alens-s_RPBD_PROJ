import axios from "axios";
import { IBus } from "../components/interfaces/Bus.interfaces";

class BusesService{
    private Url = 'http://localhost:8975/buses';
    async getAll(){
        return axios.get<IBus[]>(this.Url);
    }
}

export default new BusesService()