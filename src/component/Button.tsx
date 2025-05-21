// src/components/CommonButton.tsx
import styled from 'styled-components';

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

export default Button;
