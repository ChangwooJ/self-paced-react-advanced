import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '../../styles/GlobalStyle';
import insertImgSrc from '../utils/insertImgSrc';
import Modal from './Modal';
import Button from '../Button';

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
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

const initForm = {
  category: "",
  name: "",
  description: "",
  imgSrc: null,
};

const AddRestaurantModal = ({ isOpen, setIsAddModalOpen }) => {
  const [form, setForm] = useState(initForm);
  const [loading, setLoading] = useState(false);

  const postNewRestaurant = async () => {
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

    postNewRestaurant();
  }

  return (
    <Modal isOpen={isOpen} onClose={() => setIsAddModalOpen(false)}>
      <Typography.Title margin="0 0 36px 0">
        새로운 음식점
      </Typography.Title>
      <form>
        <FormItem>
          <Typography.Caption htmlFor="category" color="var(--grey-400)" required>
            카테고리
          </Typography.Caption>
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
          <Typography.Caption htmlFor="name" color="var(--grey-400)" required>
            이름
          </Typography.Caption>
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
          <Typography.Caption htmlFor="description" color="var(--grey-400)">
            설명
          </Typography.Caption>
          <TextArea
            name="description"
            id="description"
            cols={30}
            rows={5}
            value={form.description}
            onChange={handleChange}
          />
          <Typography.Caption color="var(--grey-300)">
            메뉴 등 추가 정보를 입력해 주세요.
          </Typography.Caption>
        </FormItem>
        <Button
          onClick={handleUploadForm}
          disabled={loading}
        >
          추가하기
        </Button>
      </form>
    </Modal>
  );
};

export default AddRestaurantModal;
