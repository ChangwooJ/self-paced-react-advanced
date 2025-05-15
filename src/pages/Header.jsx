import styled from 'styled-components';
import { typography } from '../styles/GlobalStyle';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background-color: var(--primary-color);
`;

const Title = styled.h1`
  ${typography.title}
  color: #fcfcfd;
`;

const AddButton = styled.button`
  height: 40px;
  border: none;
  border-radius: 8px;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`;

const AddButtonImage = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const Header = ({ setIsAddModalOpen }) => {
  return (
    <HeaderContainer>
      <Title>점심 뭐 먹지</Title>
      <AddButton
        type="button"
        aria-label="음식점 추가"
        onClick={() => setIsAddModalOpen(true)}
      >
        <AddButtonImage
          src="../../templates/add-button.png"
          alt="음식점 추가"
        />
      </AddButton>
    </HeaderContainer>
  );
};

export default Header;
