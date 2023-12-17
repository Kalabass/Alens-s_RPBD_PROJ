import styled from "styled-components";
import ScheduleHeader from "./ScheduleHeader";
import ScheduleContainer from "./ScheduleContainer";

const Wrapper = styled.div`
    margin-left: 5%;
    margin-top: 5%;
    width: 90%;
    border: 2px solid orange;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`

const Schedule:React.FC = () => {
    return (
        <Wrapper>
            <ScheduleHeader/>
            <ScheduleContainer>
            </ScheduleContainer>
        </Wrapper>
    );
};

export default Schedule;