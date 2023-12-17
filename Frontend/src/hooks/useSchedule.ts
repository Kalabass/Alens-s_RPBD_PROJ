import { useQuery } from "@tanstack/react-query"
import ScheduleService from "../services/Schedule.Service"
import { useMemo } from "react";

export const useSchedule = () => {
    const query = useQuery({
        queryKey: ['schedule'],
        queryFn: () => ScheduleService.getAll(),
        select: ({data}) => data
    })

    return useMemo(() => query, [query]);
}