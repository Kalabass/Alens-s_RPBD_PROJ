import { useQuery } from "@tanstack/react-query"
import FlightService from "../services/Flight.Service"
import { useMemo } from "react";

export const useFlights = () => {
    const query =  useQuery({
        queryKey: ['flights'],
        queryFn: () => FlightService.getAll(),
        select: ({data}) => data
    })
    return useMemo(() => query, [query]);
}