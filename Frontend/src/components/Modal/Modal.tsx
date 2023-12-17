import styled from "styled-components";
import { useModalStore } from "../storages/Modal.Store";
import { useDrivers } from "../../hooks/useDrivers";
import { useBuses } from "../../hooks/useBuses";
import React, { useState } from "react";
import { useFlights } from "../../hooks/useFlights";
import { ICategory } from "../interfaces/Category.Interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ScheduleService from "../../services/Schedule.Service";
import { IScheduleBody } from "../interfaces/Schedule.Interfaces";
import moment from 'moment-timezone';

const StyledModal = styled.div`
    position: absolute;
    background-color: white;
    border: 2px solid orange;
    border-radius: 7px;
    margin-left: 25%;
    margin-top: 3%;
    width: 40%;
    height: 40%;
    z-index: 999;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 10px;
`

const StyledMask = styled.div`
    width: 1000%;
    height: 1000%;
    background-color: black;
    position: fixed;
    margin-top: -50%;
    margin-left: -50%;
    z-index: 997;
    opacity: 0.8;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
`

const WrapperItem = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    padding: 1px;
    width: 100%;
    gap: 10px;
`

const StyledSelect = styled.select`
    border: 2px solid #4c11d7;
    width: 100%;
    border-radius: 8px;
    height: 40px;
    text-align: center;
`

const CategoryDiv = styled.div`
    border: 2px solid #4c11d7;
    width: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

const StyledInput = styled.input`
    border: 2px solid #4c11d7;
    width: 100%;
    border-radius: 8px;
    text-align: center;
    height: 40px;
`

const StyledButton = styled.button`
    border: 2px solid #4c11d7;
    width: 100%;
    border-radius: 8px;
    height: 40px;
    background-color: orange;

    cursor: pointer;
`

const Modal:React.FC = () => {

    const {setIsShown} = useModalStore();

    const driversData = useDrivers().data;
    const BusesData = useBuses().data;
    const flightsData = useFlights().data;

    const [driverOption, setDriverOption] = useState<number>();
    const [busOption, setBusOption] = useState<number>();
    const [flightOption, setflightOption] = useState<number>();

    const [currentDriverCategories, setCurrentDriverCategories] = useState<ICategory[]>([]);
    const [currentBusCategory, setCurrentBusCategory] = useState<ICategory>();

    const [inputValueFrom, setInputValueFrom] = useState<string>('');
    const [inputValueTo, setInputValueTo] = useState<string>('');

    const DriverSelectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDriverOption(+e.target.value); 
        driversData?.forEach((driver) => {
            if(driver.id === +e.target.value)
                setCurrentDriverCategories(driver.categories)
        })
    }

    const BusSelectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBusOption(+e.target.value); 
        BusesData?.forEach((bus) => {
            if(bus.id === +e.target.value)
                setCurrentBusCategory(bus.category)
        })
    }

    const query_client = useQueryClient();

    const onErrorHandler = (error: Error) => {
        alert(error.response.data.message);
    }

    const AddMutation = useMutation({
        mutationFn: (schedule : IScheduleBody) => ScheduleService.Add(schedule),
        mutationKey: ['schedule', 'create'],
        onSuccess: () => {query_client.invalidateQueries({queryKey: ['schedule']}); setIsShown(false);},
        onError: (error) =>  onErrorHandler(error),
    })

    const OnclickHandler = () => {
        let [hours, minutes] = inputValueFrom.split(":");
        const newTimeFrom = new Date();
        newTimeFrom.setHours(Number(hours));
        newTimeFrom.setMinutes(Number(minutes) );

        [hours, minutes] = inputValueTo.split(":");
        const newTimeTo = new Date();
        newTimeTo.setHours(Number(hours));
        newTimeTo.setMinutes(Number(minutes));



        const schedule: IScheduleBody = {
            bus_id: busOption,
            driver_id: driverOption,
            flight_id: flightOption,
            time_from: newTimeFrom,
            time_to: newTimeTo
        }
        AddMutation.mutate(schedule);
    }

    return (
        <>
            <StyledMask onClick={() => setIsShown(false)}/>
            <StyledModal>
                <Wrapper>
                    <WrapperItem>
                        {driversData && <StyledSelect value={driverOption} onChange={DriverSelectChangeHandler}>
                            {driversData.map((driver) => {
                                return (
                                    <option value={driver.id}>{`${driver.name} ${driver.surname}`}</option>
                                )
                            })}
                        </StyledSelect>}
                        <CategoryDiv>
                            {currentDriverCategories.map((category) => (
                                <div>{category.name}</div>
                            ))}
                        </CategoryDiv>
                    </WrapperItem>
                    <WrapperItem>
                        {BusesData && <StyledSelect value={busOption} onChange={BusSelectChangeHandler}>
                            {BusesData.map((bus) => {
                                return(
                                    <option value={bus.id}>{`${bus.marka} ${bus.number}`}</option>
                                )
                            })}
                        </StyledSelect>}
                        <CategoryDiv>
                            {currentBusCategory?.name}
                        </CategoryDiv>
                    </WrapperItem>
                    <WrapperItem>
                        <StyledInput type="time" value={inputValueFrom} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setInputValueFrom(e.target.value)}></StyledInput>
                        <StyledInput type="time" value={inputValueTo} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setInputValueTo(e.target.value)}></StyledInput>
                    </WrapperItem>
                    <WrapperItem>
                        {flightsData && <StyledSelect value={flightOption} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {setflightOption(+e.target.value)}}>
                            {flightsData.map((flight) => (
                                <option value={flight.id}>{`${flight.place_from} - ${flight.place_to}`}</option>
                            ))}
                        </StyledSelect>}
                    </WrapperItem>
                    <WrapperItem>
                        <StyledButton onClick={OnclickHandler}>
                            Добавить
                        </StyledButton>
                    </WrapperItem>
                </Wrapper>
            </StyledModal>
        </>
    );
};

export default Modal;