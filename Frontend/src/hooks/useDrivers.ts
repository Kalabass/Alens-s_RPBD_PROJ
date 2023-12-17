import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import DriversService from '../services/Drivers.Service';

export const useDrivers = () => {
  const query = useQuery({
    queryKey: ['drivers'],
    queryFn: () => DriversService.getAll(),
    select: ({ data }) => data,
  });

  return useMemo(() => query, [query]);
};