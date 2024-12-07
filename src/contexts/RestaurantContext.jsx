import {createContext, useContext, useState} from "react";
import { useRestaurants } from "../hooks/useRestaurants.js";
import {v4 as uuidv4} from "uuid";

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
    const { restaurants, addRestaurant } = useRestaurants();
    const [ category, setCategory ] = useState("전체");
    const [ clickedRestaurantItem, setClickedRestaurantItem ] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState({
        detail: false,
        add: false,
    });

    const toggleModal = (modalType, isOpen, detailData = null, event = null) => {
        setIsModalOpen((prev) => ({...prev, [modalType]: isOpen}));

        if (modalType === "detail" && isOpen && detailData) {
            setClickedRestaurantItem(detailData);
        } else if (modalType === "add" && !isOpen && event) {
            addRestaurant({
                id: uuidv4(),
                name: event.name,
                description: event.description,
                category: event.category
            });
        }
    };

    return (
        <RestaurantContext.Provider
            value={{
                restaurants,
                toggleModal,
                isModalOpen,
                category,
                setCategory,
                clickedRestaurantItem
            }}
        >
            {children}
        </RestaurantContext.Provider>
    );
};

export const useRestaurantContext = () => useContext(RestaurantContext);