import styled from 'styled-components';
import { CATEGORYOPTION } from '../../constants/CategoryOption';

const CategoryFilter = ({ category, onChangeCategory }) => {
  return (
    <main>
      <RestaurantFilterContainer>
        <select
          name="category"
          id="category-filter"
          value={category}
          aria-label="음식점 카테고리 필터"
          onChange={(e) => onChangeCategory(e.target.value)}
        >
          <option value="전체">전체</option>
          {CATEGORYOPTION.map((option, idx) => {
            return (
              <option key={idx} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </RestaurantFilterContainer>
    </main>
  );
};

export default CategoryFilter;

const RestaurantFilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 24px;

  & > select {
    height: 44px;
    min-width: 125px;
    border: 1px solid ${(props) => props.theme.grey200};
    border-radius: 8px;
    background: transparent;
    font-size: 16px;
    padding: 8px;
  }
`;
