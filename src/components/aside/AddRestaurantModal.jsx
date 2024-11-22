import { useState } from 'react';
import styled from 'styled-components';
import { CATEGORYOPTION } from '../constants/CategoryOption';
import Modal from '../common/modal/Modal';
import { postRestaurant } from '../../api/restaurant';
import { getRestaurant } from '../../api/restaurant';

const AddRestaurantModal = ({ setRestaurantsList, setIsAddModalOpen }) => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const validateFilledout = () => {
    if (!category) {
      alert('카테고리를 선택해주세요');
      return false;
    }
    if (!name) {
      alert('이름을 입력해주세요');
      return false;
    }
    if (!description) {
      alert('설명을 입력해주세요');
      return false;
    }
    return true;
  };

  const newRestaurant = {
    id: Date.now(),
    category: category,
    name: name,
    description: description,
  };

  const submitFormHandler = async () => {
    try {
      const response = await postRestaurant(newRestaurant);

      if (response.ok) {
        await getRestaurant(setRestaurantsList);
        setIsAddModalOpen(false);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error('Error posting restaurants', error);
    }
  };

  const checkFormHandler = (e) => {
    e.preventDefault();
    const isFilledoutAll = validateFilledout();

    if (isFilledoutAll) {
      submitFormHandler();
      setIsAddModalOpen(false);
    }
  };

  return (
    <Modal title="새로운 음식점" onClose={() => setIsAddModalOpen(false)}>
      <form onSubmit={(e) => checkFormHandler(e)}>
        <FormItemBox>
          <StyledLabel htmlFor="category">카테고리</StyledLabel>
          <select
            name="category"
            id="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">선택해 주세요</option>
            {CATEGORYOPTION.map((option, idx) => {
              return (
                <option key={idx} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </FormItemBox>
        <FormItemBox>
          <StyledLabel htmlFor="name">이름</StyledLabel>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </FormItemBox>
        <FormItemBox>
          <StyledLabel htmlFor="description">설명</StyledLabel>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <span>메뉴 등 추가 정보를 입력해 주세요.</span>
        </FormItemBox>
        <ButtonConatiner>
          <StyledButton type="submit">추가하기</StyledButton>
        </ButtonConatiner>
      </form>
    </Modal>
  );
};

export default AddRestaurantModal;

const FormItemBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  & > select {
    color: var(--grey-300);
  }

  & > span {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }

  input,
  textarea,
  select {
    padding: 8px;
    margin: 6px 0;
    border: 1px solid var(--grey-200);
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
  }

  input[name='name'],
  input[name='link'] {
    height: 44px;
  }
`;

const StyledLabel = styled.label`
  color: var(--grey-400);
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  &::after {
    padding-left: 4px;
    color: var(--primary-color);
    content: '*';
  }
`;

const ButtonConatiner = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: var(--primary-color);
  color: var(--grey-100);
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;
