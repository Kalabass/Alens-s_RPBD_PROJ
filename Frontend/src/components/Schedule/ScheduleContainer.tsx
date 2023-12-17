import styled from "styled-components";
import SheduleItem from "./SheduleItem";
import { useSchedule } from "../../hooks/useSchedule";
import Modal from "../Modal/Modal";
import { useModalStore } from "../storages/Modal.Store";

const Wrapper = styled.div`
    background-color: white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyledButton = styled.button`
    width: 10%;
    margin-left: 45%;
    height: 40px;
    background-color: orange;
    border: 1px solid orange;
    border-radius: 8px;
    cursor: pointer;    

`

const ScheduleContainer:React.FC = () => {

    const {data, isLoading, isError} = useSchedule();
    const {isShown, setIsShown} = useModalStore();

    return (
        <>
            {isShown && <Modal/>}
            <Wrapper>
                {isLoading && <h1>Loading...</h1>}
                {isError && <h1>ERROR</h1>}
                {data &&
                    data.map((schedule) => (
                        <SheduleItem key = {schedule.id} {...schedule}/>
                    ))
                }
                <StyledButton onClick={() => setIsShown(true)}>
                    Добавить
                </StyledButton>
            </Wrapper>
        </>
    );
};

export default ScheduleContainer;