import Categories from "../../data/Category.js";
import styled from "styled-components";
import { useRestaurantContext } from "../../contexts/RestaurantContext.jsx";

const RestaurantFilterContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    margin-top: 24px;
    
    & select {
        height: 44px;
        min-width: 125px;
        border: 1px solid #d0d5dd;
        border-radius: 8px;
        background: transparent;
        font-size: 16px;
        padding: 8px;
    }
`;

function CategoryFilter() {
    const categories = Categories();
    const { category, setCategory } = useRestaurantContext();

    return (
        <RestaurantFilterContainer>
            <select 
                name="category" 
                id="category-filter"
                aria-label="음식점 카테고리 필터"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            >
                {categories.map((category) => (
                    <option
                        key={category.id} value={category.name}>{category.name}</option>
                ))}
            </select>
        </RestaurantFilterContainer>
    );
}

export default CategoryFilter;