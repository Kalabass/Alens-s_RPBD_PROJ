export interface IRequestScheduleBody{
    time_from: Date,
    time_to: Date,
    driver_id: number,
    bus_id: number,
    flight_id: number
}