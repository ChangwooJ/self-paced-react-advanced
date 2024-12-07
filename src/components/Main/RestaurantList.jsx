import RestaurantItem from './RestaurantItem.jsx';
import styled from "styled-components";
import { useRestaurantContext } from "../../contexts/RestaurantContext.jsx";

const RestaurantListContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin: 16px 0;
`;

function RestaurantList() {
    const { category, restaurants } = useRestaurantContext();

    const filteredRestaurants = category === "전체" ? restaurants : restaurants.filter(
        (restaurant) => restaurant.category === category
    );

    return (
        <RestaurantListContainer>
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
        </RestaurantListContainer>
    );
}

export default RestaurantList;