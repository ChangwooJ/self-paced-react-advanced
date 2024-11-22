import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import RestaurantList from "./components/RestaurantList.jsx";
import AddRestaurantModal from "./components/AddRestaurantModal.jsx";
import RestaurantDetailModal from "./components/RestaurantDetailModal.jsx";
import { getRestaurantList } from "./api/restaurantAPI";

function App() {
  const [category, setCategory] = useState("전체");
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurantList().then((data) => {
      setRestaurantList(data);
    });
  }, []);

  const filterRestaurants = (category) => {
    if (category === "전체") return restaurantList;
    else return restaurantList.filter((restaurant) => restaurant.category === category);
  };
  const filteredRestaurants = filterRestaurants(category);

  const [modal, setModal] = useState({
    isOpen: false,
    restaurant: {
      name: "",
      description: "",
    },
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const updateRestaurantList = () => {
    getRestaurantList().then((data) => {
      setRestaurantList(data);
    });
  };

  return (
    <>
      <Header setIsAddModalOpen={setIsAddModalOpen} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} setModal={setModal} modal={modal} />
      </main>
      <aside>
        {modal.isOpen && <RestaurantDetailModal setModal={setModal} modal={modal} />}
        {isAddModalOpen && (
          <AddRestaurantModal
            setIsAddModalOpen={setIsAddModalOpen}
            updateRestaurantList={updateRestaurantList}
          />
        )}
      </aside>
    </>
  );
}

export default App;
