import {styled} from "styled-components"
import Schedule from "./Schedule/Schedule";

const Wrapper = styled.div`
position: absolute;
    background-color: #4c11d7;
    width: 100%;
    height: 100%;
`

const MainPage:React.FC = () => {
    return (
        <Wrapper>
            <Schedule>
                
            </Schedule>
        </Wrapper>
    );
};

export default MainPage;