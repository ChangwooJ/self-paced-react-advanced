import "./App.css";
import { useState, useEffect, useContext } from "react";
import Header from "./components/Header.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import RestaurantList from "./components/RestaurantList.jsx";
import AddRestaurantModal from "./components/AddRestaurantModal.jsx";
import RestaurantDetailModal from "./components/RestaurantDetailModal.jsx";
import { getRestaurantList } from "./api/restaurantAPI";

import { CategoryProvider } from "./contexts/CategoryContext";
import { RestaurantListProvider } from "./contexts/RestaurantListContext";
import { ModalContext, ModalProvider } from "./contexts/ModalContext";

function App() {
  const { modal, isAddModalOpen } = useContext(ModalContext);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        {modal.isOpen && <RestaurantDetailModal />}
        {isAddModalOpen && <AddRestaurantModal />}
      </aside>
    </>
  );
}

export default App;
