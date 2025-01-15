import Categories from "../../data/Category.js";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { changeCategory } from "../../store/CategorySlice.js";

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
    const dispatch = useDispatch();
    const { category } = useSelector((state) => state.category);
    const categories = Categories();

    return (
        <RestaurantFilterContainer>
            <select 
                name="category" 
                id="category-filter"
                aria-label="음식점 카테고리 필터"
                value={category}
                onChange={(event) => dispatch(changeCategory(event.target.value))}
            >
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                        {cat.name}
                    </option>
                ))}
            </select>
        </RestaurantFilterContainer>
    );
}

export default CategoryFilter;