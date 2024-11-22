import { CategoryFilterContainer } from "../style/CategoryFilterStyle";
import { CATEGORY_DATA } from "../data/categoryData";

function CategoryFilter({ category, onChangeCategory }) {
  return (
    <CategoryFilterContainer>
      <select
        name="category"
        id="category-filter"
        className="restaurant-filter"
        aria-label="음식점 카테고리 필터"
        value={category}
        onChange={(event) => onChangeCategory(event.target.value)}
      >
        {CATEGORY_DATA.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </CategoryFilterContainer>
  );
}

export default CategoryFilter;
