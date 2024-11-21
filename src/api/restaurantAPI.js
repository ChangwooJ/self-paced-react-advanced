export async function getRestaurantList() {
  const response = await fetch("http://localhost:3000/restaurants");
  const data = await response.json();

  return data;
}

export async function addRestaurant(restaurant) {
  await fetch("http://localhost:3000/restaurants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restaurant),
  });
}
