import { useEffect } from "react";
import { CATEGORY_DATA } from "../data/categoryData";
import { addRestaurant } from "../api/restaurantAPI";
import { useState, useContext } from "react";
import {
  AddRestaurantModalContainer,
  Modal,
  ModalBackdrop,
  ModalContainer,
  Title,
  FormItem,
  ButtonContainer,
} from "../style/AddRestaurantModalStyle";
import { ModalContext } from "../contexts/ModalContext";
import { RestaurantListContext } from "../contexts/RestaurantListContext";

function AddRestaurantModal() {
  const { setIsAddModalOpen } = useContext(ModalContext);
  const { updateRestaurantList } = useContext(RestaurantListContext);

  useEffect(() => {
    updateRestaurantList();
  }, []);

  const [newRestaurant, setNewRestaurant] = useState({
    id: Date.now(),
    name: "",
    description: "",
    category: "",
  });

  const handleAddBtnClick = async () => {
    await addRestaurant(newRestaurant);
    updateRestaurantList();

    setIsAddModalOpen(false);
  };

  return (
    <AddRestaurantModalContainer>
      <Modal>
        <ModalBackdrop onClick={() => setIsAddModalOpen(false)}></ModalBackdrop>
        <ModalContainer>
          <Title className="text-title">새로운 음식점</Title>
          <form>
            <FormItem required>
              <label htmlFor="category" className="text-caption">
                카테고리
              </label>
              <select
                name="category"
                id="category"
                required
                onChange={(event) =>
                  setNewRestaurant({ ...newRestaurant, category: event.target.value })
                }
              >
                <option value="">선택해 주세요</option>
                {CATEGORY_DATA.slice(1).map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </FormItem>

            <FormItem required>
              <label htmlFor="name" className="text-caption">
                이름
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={(event) =>
                  setNewRestaurant({ ...newRestaurant, name: event.target.value })
                }
              />
            </FormItem>

            <FormItem>
              <label htmlFor="description" className="text-caption">
                설명
              </label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                value={newRestaurant.description}
                onChange={(event) =>
                  setNewRestaurant({ ...newRestaurant, description: event.target.value })
                }
              ></textarea>
              <span className="help-text text-caption">메뉴 등 추가 정보를 입력해 주세요.</span>
            </FormItem>

            <ButtonContainer>
              <button
                className="button button--primary text-caption"
                type="button"
                onClick={handleAddBtnClick}
              >
                추가하기
              </button>
            </ButtonContainer>
          </form>
        </ModalContainer>
      </Modal>
    </AddRestaurantModalContainer>
  );
}

export default AddRestaurantModal;
