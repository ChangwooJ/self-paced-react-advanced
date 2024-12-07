import "./App.css";
import Header from "./components/Header/Header.jsx";
import CategoryFilter from "./components/Main/CategoryFilter.jsx";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal.jsx";
import RestaurantList from "./components/Main/RestaurantList.jsx"
import { useRestaurantContext } from "./contexts/RestaurantContext.jsx";

function App() {
  const { isModalOpen } = useRestaurantContext();

  return (
    <>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        {isModalOpen.detail &&
          <RestaurantDetailModal />
        }
        {isModalOpen.add &&
          <AddRestaurantModal />
        }
      </aside>
    </>
  );
}

export default App;
