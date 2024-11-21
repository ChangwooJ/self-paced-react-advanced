import { RestaurantListContainer } from "../style/RestaurantListStyle";

const CATEGORY_IN_ENGLISH = Object.freeze({
  한식: "korean",
  중식: "chinese",
  일식: "japanese",
  양식: "western",
  아시안: "asian",
  기타: "etc",
});

function RestaurantList({ restaurants, setModal, modal }) {
  const handleRestaurantClick = (restaurant) => {
    setModal({
      ...modal,
      isOpen: true,
      restaurant: {
        name: restaurant.name,
        description: restaurant.description,
      },
    });
  };

  return (
    <RestaurantListContainer>
      <section className="restaurant-list-container">
        <ul className="restaurant-list">
          {restaurants.map((restaurant) => (
            <li
              key={restaurant.id}
              className="restaurant"
              onClick={() => handleRestaurantClick(restaurant)}
            >
              <div className="restaurant__category">
                <img
                  src={`/category-${CATEGORY_IN_ENGLISH[restaurant.category]}.png`}
                  alt=""
                  className="category-icon"
                />
              </div>
              <div className="restaurant__info">
                <h3 className="restaurant__name text-subtitle">{restaurant.name}</h3>
                <p className="restaurant__description text-body">{restaurant.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </RestaurantListContainer>
  );
}

export default RestaurantList;
