import Modal from "./Modal.jsx"
import styled from "styled-components";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {modalState} from "../../recoil/ModalState.jsx";
import {clickedRestaurantState} from "../../recoil/ClickedRestaurantState.jsx";

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
    const { name, description} = useRecoilValue(clickedRestaurantState);
    const setIsModalOpen = useSetRecoilState(modalState);

    const closeDetailModal = () => {
        setIsModalOpen((prev) => ({
            ...prev,
            detail: false,
        }));
    };

    return (
        <Modal
            title={name}
            onClose={closeDetailModal}
        >
            <RestaurantInfo>
                <RestaurantInfoDescription>
                    {description}
                </RestaurantInfoDescription>
            </RestaurantInfo>
            <ButtonContainer
                onClick={closeDetailModal}
            >
                <Button>닫기</Button>
            </ButtonContainer>
        </Modal>
    );
}

export default RestaurantDetailModal;