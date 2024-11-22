import styled from "styled-components";

export const Modal = styled.div`
  /* .modal {
    display: none;
  }

  .modal--open {
    display: block;
    //display: none;
  } */
  display: block;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

export const Title = styled.h2`
  margin-bottom: 36px;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  label::after {
    ${(props) =>
      props.required &&
      `
      padding-left: 4px;
      color: var(--primary-color);
      content: "*";
    `}
  }

  label {
    color: var(--grey-400);
    font-size: 14px;
  }

  .help-text {
    color: var(--grey-300);
  }

  input,
  textarea,
  select {
    padding: 8px;
    margin: 6px 0;

    border: 1px solid var(--grey-200);
    border-radius: 8px;

    font-size: 16px;
  }

  textarea {
    resize: none;
  }

  select {
    height: 44px;

    padding: 8px;

    border: 1px solid var(--grey-200);
    border-radius: 8px;

    color: var(--grey-300);
  }

  input[name="name"],
  input[name="link"] {
    height: 44px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  .button {
    width: 100%;
    height: 44px;

    margin-right: 16px;

    border: none;
    border-radius: 8px;

    font-weight: 600;
    cursor: pointer;
  }

  .button:last-child {
    margin-right: 0;
  }

  .button--secondary {
    border: 1px solid var(--grey-300);
    background: transparent;

    color: var(--grey-300);
  }

  .button--primary {
    background: var(--primary-color);

    color: var(--grey-100);
  }
`;

export const AddRestaurantModalContainer = styled.div`
  .text-title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  }

  .text-caption {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }

  /* 
  

  .restaurant-info {
    margin-bottom: 24px;
  } */
`;
