export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resultData = await response.json();

  if (!response.ok) {
    throw new Error("An error while fetching data!");
  }

  return resultData.places;
}

export async function updateUserData(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resultData = await response.json();
  if (!response.ok) {
    throw new Error("An error while updating data!");
  }

  return resultData.message;
}

export async function getUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resultData = await response.json();
  if (!response.ok) {
    throw new Error("An error while updating data!");
  }
  return resultData.places;
}
