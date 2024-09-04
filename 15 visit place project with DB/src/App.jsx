import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import Error from "./components/Error.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import { updateUserData, getUserPlaces } from "./http.js";

function App() {
  const selectedPlace = useRef();

  const [isFetching, setIsFetching] = useState(false);
  const [userPlaces, setUserPlaces] = useState([]);
  const [userPlacesError, setUserPlacesError] = useState();

  const [errorMsg, setErrorMsg] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function fetchUserPlaces() {
      setIsFetching(true);
      try {
        const places = await getUserPlaces();
        setUserPlaces(places);
      } catch (error) {
        setUserPlacesError({
          message: error.message || "Error while fetching user places.",
        });
      }
      setIsFetching(false);
    }

    fetchUserPlaces();
  }, []);

  function handleStartRemovePlace(place) {
    console.log(userPlaces)
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserData([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorMsg({
        status: true,
        message: "Error while updating places.",
      });
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    console.log("userPlaces:", userPlaces)

    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try {
      console.log("userPlaces:", userPlaces)
      await updateUserData(
        userPlaces.filter((place) => place.id !== selectedPlace.current.id)
      );
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorMsg({
        status: true,
        message: "Error while deleting places.",
      });
    }

    setModalIsOpen(false);
  }, []);

  function handleErrorClose() {
    setErrorMsg(null);
  }

  return (
    <>
      {errorMsg && (
        <Modal open={errorMsg.status} onClose={handleErrorClose}>
          <Error
            title="Error !"
            message={errorMsg.message}
            onConfirm={handleErrorClose}
          />
        </Modal>
      )}

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {userPlacesError && (
          <Error title="Error !" message="Can't fetch user data" />
        )}
        {!userPlacesError && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            isFetching={isFetching}
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
