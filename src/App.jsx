import "./App.css";
import Header from "./components/Header/Header.jsx";
import CategoryFilter from "./components/Main/CategoryFilter.jsx";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal.jsx";
import RestaurantList from "./components/Main/RestaurantList.jsx"
import { useSelector } from "react-redux";

function App() {
  const { detail, add } = useSelector((state) => state.modal);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        {detail &&
          <RestaurantDetailModal />
        }
        {add &&
          <AddRestaurantModal />
        }
      </aside>
    </>
  );
}

export default App;