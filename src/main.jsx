import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CategoryProvider } from "./contexts/CategoryContext.jsx";
import { RestaurantListProvider } from "./contexts/RestaurantListContext.jsx";
import { ModalProvider } from "./contexts/ModalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoryProvider>
      <RestaurantListProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </RestaurantListProvider>
    </CategoryProvider>
  </StrictMode>
);
