import { saveRestaurants } from '../redux/restaurantsSlice';

export const getRestaurant = async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/restaurants');
    const jsonData = await response.json();

    if (response.ok) {
      dispatch(saveRestaurants(jsonData));
    } else {
      console.error('Failed to fetch restaurants:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching restaurants:', error);
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
