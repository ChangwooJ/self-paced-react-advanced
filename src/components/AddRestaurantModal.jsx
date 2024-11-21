import { AddRestaurantModalContainer } from "../style/AddRestaurantModalStyle";
import { CATEGORY_DATA } from "../data/categoryData";
import { addRestaurant } from "../api/restaurantAPI";
import { useState } from "react";

function AddRestaurantModal({ setIsAddModalOpen, updateRestaurantList }) {
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
      <div className="modal modal--open">
        <div className="modal-backdrop" onClick={() => setIsAddModalOpen(false)}></div>
        <div className="modal-container">
          <h2 className="modal-title text-title">새로운 음식점</h2>
          <form>
            <div className="form-item form-item--required">
              <label htmlFor="category text-caption">카테고리</label>
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
            </div>

            <div className="form-item form-item--required">
              <label htmlFor="name text-caption">이름</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={(event) =>
                  setNewRestaurant({ ...newRestaurant, name: event.target.value })
                }
              />
            </div>

            <div className="form-item">
              <label htmlFor="description text-caption">설명</label>
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
            </div>

            <div className="button-container">
              <button
                className="button button--primary text-caption"
                type="button"
                onClick={handleAddBtnClick}
              >
                추가하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </AddRestaurantModalContainer>
  );
}

export default AddRestaurantModal;
