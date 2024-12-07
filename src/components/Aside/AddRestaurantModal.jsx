import Categories from "../../data/Category.js";
import Modal from "./Modal.jsx"
import styled from "styled-components";
import { useRestaurantContext } from "../../contexts/RestaurantContext.jsx";

const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;

    label {
        color: var(--grey-400);
        font-size: 14px;

        ${(props) => props.$isRequired &&
                `
                &::after {
                    padding-left: 4px;
                    color: var(--primary-color);
                    content: "*";
                }
                `
        }
    }
`;

const FormInput = styled.input`
  height: 44px;
  padding: 8px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  color: var(--grey-300);
`;

const FormTextArea = styled.textarea`
  height: auto; /* 텍스트 영역은 내용에 따라 크기를 조정 */
  padding: 8px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  color: var(--grey-300);
  resize: none;
`;

const FormSelect = styled.select`
  height: 44px;
  padding: 8px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  color: var(--grey-300);
`;

const FormHelpText = styled.span`
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: var(--grey-300);
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

    // button-container
    background: var(--primary-color);
    color: var(--grey-100);
    
    // text-caption
    font-size: 14px;
    line-height: 20px;
    //font-weight: 400;
`;

function AddRestaurantModal() {
    const categories = Categories().filter(
        (category) => category.name !== "전체"
    );

    const handleSubmit = (event) => {
        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        toggleModal("add", false, null, formJson)
    }

    const { toggleModal } = useRestaurantContext();

    return (
        <Modal 
            title="새로운 음식점" 
            onClose={() => toggleModal("add", false)}
        >
            <form method="post" onSubmit={handleSubmit}>
                <FormItem $isRequired={true}>
                    <label htmlFor="category">카테고리</label>
                    <FormSelect name="category" id="category" required>
                        <option value="">선택해 주세요</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                        ))}
                    </FormSelect>
                </FormItem>
                <FormItem $isRequired={true}>
                    <label htmlFor="name">이름</label>
                    <FormInput type="text" name="name" id="name" required></FormInput>
                </FormItem>
                <FormItem $isRequired={true}>
                    <label htmlFor="description">설명</label>
                    <FormTextArea name="description" id="description" cols="30" rows="5"></FormTextArea>
                    <FormHelpText>메뉴 등 추가 정보를 입력해 주세요.</FormHelpText>
                </FormItem>
                <ButtonContainer>
                    <Button>추가하기</Button>
                </ButtonContainer>
            </form>
        </Modal>
    ); 
}

export default AddRestaurantModal;