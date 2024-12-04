import "./App.css";
import { useContext, useEffect } from "react";
import Header from "./components/Header.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import RestaurantList from "./components/RestaurantList.jsx";
import AddRestaurantModal from "./components/AddRestaurantModal.jsx";
import RestaurantDetailModal from "./components/RestaurantDetailModal.jsx";
import { getRestaurantList } from "./api/restaurantAPI";
import { RestaurantListContext } from "./contexts/RestaurantListContext";
import { ModalContext } from "./contexts/ModalContext";

function App() {
  const { detailModal, isAddModalOpen } = useContext(ModalContext);
  const { updateRestaurantList } = useContext(RestaurantListContext);

  useEffect(() => {
    updateRestaurantList();
  }, []);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        {detailModal.isOpen && <RestaurantDetailModal />}
        {isAddModalOpen && <AddRestaurantModal />}
      </aside>
    </>
  );
}

export default App;
