import styled from 'styled-components';

const Modal = ({ children, title, onClose }) => {
  return (
    <ModalOpenBox>
      <ModalBackdrop onClick={onClose}></ModalBackdrop>
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalContainer>
    </ModalOpenBox>
  );
};

export default Modal;

const ModalOpenBox = styled.div`
  display: block;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 32px 16px;
  border-radius: 8px 8px 0px 0px;
  background: ${(props) => props.theme.grey100};
`;

const ModalTitle = styled.h2`
  margin-bottom: 36px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;
