import axios from "axios";
import { ISchedule, IScheduleBody} from "../components/interfaces/Schedule.Interfaces";

class ScheduleService{
    private Url = 'http://localhost:8975/schedule';

    async getAll(){
        return axios.get<ISchedule[]>(this.Url);
    }

    async Add(schedule: IScheduleBody){
        return axios.post<ISchedule>(this.Url, schedule);
    }
}

export default new ScheduleService()