import styled from "styled-components";

export const CategoryFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 24px;

  select {
    height: 44px;
    min-width: 125px;

    border: 1px solid #d0d5dd;
    border-radius: 8px;
    background: transparent;

    font-size: 16px;
  }

  .restaurant-filter {
    padding: 8px;
  }
`;
