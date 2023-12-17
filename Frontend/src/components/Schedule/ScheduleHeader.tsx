import styled from "styled-components";

const Wrapper = styled.div`
    align-items: center;
    width: 100%;
    height: 10%;
    background-color: orange;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 2px solid orange;
    text-align: center;
    font-size: 40px
`

const ScheduleHeader:React.FC = () => {
    return (
        <Wrapper>
            Расписание
        </Wrapper>
    );
};

export default ScheduleHeader;