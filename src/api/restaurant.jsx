export const getRestaurant = async (setRestaurants) => {
  try {
    const response = await fetch('http://localhost:3000/restaurants');
    const jsonData = await response.json();

    return jsonData;
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
