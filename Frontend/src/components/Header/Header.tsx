import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";

const StyledHeader = styled.div`
    margin-top: 0px;
    margin-left: 0px;
    height: 80px;
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Header:React.FC = () => {
    return (
        <StyledHeader>
            <HeaderLogo/>
        </StyledHeader>
    );
};

export default Header;