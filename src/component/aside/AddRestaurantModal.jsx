import React, { useState } from 'react';
import styled from 'styled-components';
import { typography } from '../../styles/GlobalStyle';
import insertImgSrc from '../utils/insertImgSrc';
import Modal from './Modal';

const ModalTitle = styled.h2`
  ${typography.title}
  margin-bottom: 36px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
`;

const Label = styled.label`
  ${typography.caption}
  color: var(--grey-400);

  &::after {
    content: ${({ required }) => required ? "'*'" : 'none'};
    padding-left: 4px;
    color: var(--primary-color);
  }
`;

const HelpText = styled.span`
  ${typography.caption}
  color: var(--grey-300);
`;

const Input = styled.input`
  padding: 8px;
  margin: 6px 0;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  height: ${({ type }) => (type === 'text' ? '44px' : 'auto')};
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin: 6px 0;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  resize: none;
`;

const Select = styled.select`
  padding: 8px;
  margin: 6px 0;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  height: 44px;
  color: var(--grey-300);
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: var(--primary-color);
  color: var(--grey-100);

  &:last-child {
    margin-right: 0;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const AddRestaurantModal = ({ isOpen, setIsAddModalOpen }) => {
  const initForm = {
    category: "",
    name: "",
    description: "",
    imgSrc: null,
  };
  const [form, setForm] = useState(initForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      setForm({ ...form, category: value, imgSrc: insertImgSrc[value] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleUploadForm = async () => {
    if (!form.category || !form.name) {
      alert("레스토랑의 카테고리와 이름을 모두 입력해주세요!");
      return;
    }
    setLoading(true);

    try {
      await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setForm(initForm);
      setIsAddModalOpen(false);
      setLoading(false);
    } catch (error) {
      console.error('레스토랑 추가 실패:', error);
      alert("레스토랑 추가에 실패했습니다.");
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={() => setIsAddModalOpen(false)}>
      <ModalTitle>
        새로운 음식점
      </ModalTitle>
      <form>
        <FormItem>
          <Label htmlFor="category" required>
            카테고리
          </Label>
          <Select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">선택해 주세요</option>
            <option value="한식">한식</option>
            <option value="중식">중식</option>
            <option value="일식">일식</option>
            <option value="양식">양식</option>
            <option value="아시안">아시안</option>
            <option value="기타">기타</option>
          </Select>
        </FormItem>

        <FormItem>
          <Label htmlFor="name" required>
            이름
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            placeholder="가게 이름을 입력해주세요."
            required
          />
        </FormItem>

        <FormItem>
          <Label htmlFor="description">
            설명
          </Label>
          <TextArea
            name="description"
            id="description"
            cols={30}
            rows={5}
            value={form.description}
            onChange={handleChange}
          />
          <HelpText>
            메뉴 등 추가 정보를 입력해 주세요.
          </HelpText>
        </FormItem>

        <ButtonContainer>
          <Button
            onClick={handleUploadForm}
            disabled={loading}
          >
            추가하기
          </Button>
        </ButtonContainer>
      </form>
    </Modal>
  );
};

export default AddRestaurantModal;
