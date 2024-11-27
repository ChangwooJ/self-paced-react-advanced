import { HeaderContainer, Title, HeaderButton } from "../style/HeaderStyle";

function Header({ setIsAddModalOpen }) {
  return (
    <HeaderContainer>
      <Title className="text-title">점심 뭐 먹지</Title>
      <HeaderButton type="button" aria-label="음식점 추가" onClick={() => setIsAddModalOpen(true)}>
        <img src="/add-button.png" alt="음식점 추가" />
      </HeaderButton>
    </HeaderContainer>
  );
}

export default Header;
