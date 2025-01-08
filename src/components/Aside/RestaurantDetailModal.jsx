import Modal from "./Modal.jsx"
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import {clickedRestaurantState} from "../../recoil/ClickedRestaurantState.jsx";
import {useDispatch} from "react-redux";
import {closeDetailModal} from "../../store/ModalSlice.js";

const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const RestaurantInfoDescription = styled.p`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
`;

const ButtonContainer = styled.div`
    display: flex;
`;

const Button = styled.button`
    // button
    width: 100%;
    height: 44px;
    margin-right: 16px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;

    // button--primary
    background: var(--primary-color);
    color: var(--grey-100);
`;

function RestaurantDetailModal() {
    const dispatch = useDispatch();
    const { name, description} = useRecoilValue(clickedRestaurantState);

    const handleClose = () => {
        dispatch(closeDetailModal());
    };

    return (
        <Modal
            title={name}
            onClose={handleClose}
        >
            <RestaurantInfo>
                <RestaurantInfoDescription>
                    {description}
                </RestaurantInfoDescription>
            </RestaurantInfo>
            <ButtonContainer
                onClick={handleClose}
            >
                <Button>닫기</Button>
            </ButtonContainer>
        </Modal>
    );
}

export default RestaurantDetailModal;