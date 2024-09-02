import Results from "./components/Results";
import UserInputs from "./components/UserInputs";
import { useState } from "react";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInputs.duration > 0;

  const handleChangeInput = (inputField, value) => {
    setUserInputs((prevState) => ({ ...prevState, [inputField]: +value }));
  };
  return (
    <>
      <UserInputs
        handleChangeInput={handleChangeInput}
        userInputs={userInputs}
      />
      {isInputValid ? (
        <Results userInputs={userInputs} />
      ) : (
        <p className="center">Please enter valid duration</p>
      )}
    </>
  );
}

export default App;
