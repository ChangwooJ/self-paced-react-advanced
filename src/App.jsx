import "./App.css";
import Body from "./pages/Body";
import Header from "./pages/Header";
import RestaurantInfoModal from "./component/aside/RestaurantInfoModal";
import AddRestaurantModal from "./component/aside/AddRestaurantModal";
import { RestaurantProvider } from "./store/RestaurantProvider";

function App() {
  return (
    <RestaurantProvider>
      <Header />
      <Body />
      <RestaurantInfoModal />
      <AddRestaurantModal />
    </RestaurantProvider>
  );
}

export default App;
