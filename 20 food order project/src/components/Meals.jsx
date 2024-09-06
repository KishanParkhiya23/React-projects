import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Loading from "../UI/Loading";

export default function Meals() {
  // const [availableMeal, setAvailableMeal] = useState([]);
  const {
    error,
    isFetching,
    data: availableMeal,
    sendRequest: setAvailableMeal,
  } = useHttp();

  useEffect(() => {
    setAvailableMeal("http://localhost:3000/mealss");
  }, []);

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : error ? (
        <p className="center">{error}</p>
      ) : (
        <ul id="meals">
          {availableMeal.map((meal) => (
            <MealItem meal={meal} key={meal.id} />
          ))}
        </ul>
      )}
    </>
  );
}
