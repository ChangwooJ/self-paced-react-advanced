import RestaurantItem from './RestaurantItem.jsx';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import {fetchRestaurants} from "../../store/RestaurantListSlice.js";

const RestaurantListContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin: 16px 0;
`;

function RestaurantList() {
    const dispatch = useDispatch();

    const { restaurants, status, error } = useSelector((state) => state.restaurants);
    const { category } = useSelector((state) => state.category);

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fetchRestaurants());
        }
    }, [dispatch, status]);

    const filteredRestaurants = category === "전체"
        ? restaurants : restaurants.filter((restaurant) => restaurant.category === category);

    return (
        <RestaurantListContainer>
            {status === 'loading' && <p>데이터를 불러오는 중...</p>}
            {status === 'failed' && <p>에러: {error}</p>}
            {status === 'succeeded' && (
                <ul>
                    {filteredRestaurants.map((restaurant) => (
                        <RestaurantItem
                            key={restaurant.id}
                            name={restaurant.name}
                            description={restaurant.description}
                            category={restaurant.category}
                            alt={restaurant.alt}
                        />
                    ))}
                </ul>
            )}
        </RestaurantListContainer>
    );
}

export default RestaurantList;