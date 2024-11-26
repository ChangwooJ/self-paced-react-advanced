import styled from "styled-components";
import { useRestaurantContext } from "../../contexts/RestaurantContext.jsx";

const Gnb = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 16px;
    background-color: var(--primary-color);
`;

const GnbTitle = styled.h1`
    color: #fcfcfd;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
`;

const GnbButton = styled.button`
    height: 40px;
    border: none;
    border-radius: 8px;
    background: transparent;
    font-size: 24px;
    cursor: pointer;
    
    & img {
        display: block;
        width: 40px;
        height: 40px;
        object-fit: contain;
    }
`;

function Header() {
    const { toggleModal } = useRestaurantContext();

    return (
        <Gnb>
            <GnbTitle>점심 뭐 먹지</GnbTitle>
            <GnbButton type="button" aria-label="음식점 추가" onClick={toggleModal("add", true)}>
                <img src="../templates/add-button.png" alt="음식점 추가"></img>
            </GnbButton>
        </Gnb>
    );
}

export default Header;