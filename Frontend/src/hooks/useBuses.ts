import { useQuery } from "@tanstack/react-query"
import BusesService from "../services/Buses.Service"
import { useMemo } from "react";

export const useBuses = () => {
    const query = useQuery({
        queryKey: ['buses'],
        queryFn: () => BusesService.getAll(),
        select: ({data}) => data
    })

    return useMemo(() => query, [query]);
}