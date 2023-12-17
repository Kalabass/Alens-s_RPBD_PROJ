import axios from "axios";
import { IFlight } from "../components/interfaces/Flight,interface";

class FlightsService{
    private Url = 'http://localhost:8975/flights';
    async getAll(){
        return axios.get<IFlight[]>(this.Url);
    }
}

export default new FlightsService()