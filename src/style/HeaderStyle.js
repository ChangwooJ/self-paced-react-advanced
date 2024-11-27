import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: var(--primary-color);

  .text-title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  }
`;

export const Title = styled.h1`
  color: #fcfcfd;
`;

export const HeaderButton = styled.button`
  height: 40px;

  border: none;
  border-radius: 8px;
  background: transparent;

  font-size: 24px;
  cursor: pointer;

  img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;
