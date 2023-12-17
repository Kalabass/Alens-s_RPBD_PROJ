import styled from "styled-components";
import { ISchedule } from "../interfaces/Schedule.Interfaces";

const Wrapper = styled.div`
    border: 2px solid #4c11d7;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    padding: 5px;
    
`

const StyledItem = styled.div`
    width: 100%;
    height: 40px;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 30px;

`

const SheduleItem:React.FC<ISchedule> = ({bus, driver, flight, time_from, time_to}) => {

    const newTimeFrom = new Date(time_from);
    const newTimeTo = new Date(time_to);

    return (
        <Wrapper>
            <StyledItem>{`${driver.name} ${driver.surname}`}</StyledItem>
            <StyledItem>{`${bus.marka} ${bus.number}`}</StyledItem>
            <StyledItem>{`${newTimeFrom.getHours().toString().padStart(2, '0')}:${newTimeFrom.getMinutes().toString().padStart(2, '0')}`}</StyledItem>
            <StyledItem>{`${newTimeTo.getHours().toString().padStart(2, '0')}:${newTimeTo.getMinutes().toString().padStart(2, '0')}`}</StyledItem>
            <StyledItem>{`${flight.place_from} - ${flight.place_to}`}</StyledItem>
        </Wrapper>
    );
};

export default SheduleItem;