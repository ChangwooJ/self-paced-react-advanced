import { saveRestaurants } from '../redux/restaurantsSlice';

export const getRestaurant = async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/restaurants');
    const jsonData = await response.json();

    if (response.ok) {
      dispatch(saveRestaurants(jsonData));
    }
  } catch (error) {
    alert('새로운 레스토랑을 불러오는 중에 문제가 생겼습니다.');
  }
};

export const postRestaurant = async (newRestaurant) => {
  const response = await fetch('http://localhost:3000/restaurants', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRestaurant),
  });

  return response;
};
