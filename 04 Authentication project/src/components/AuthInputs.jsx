import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const CustomTextButton = styled.button`
  color: #f0b322;
  border: none;

  &:hover {
    color: #f0920e;
  }
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <CustomDiv>
        <Input
          labelTxt="Email"
          isInvalid={emailNotValid}
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
        ></Input>
        <Input
          labelTxt="Password"
          isInvalid={passwordNotValid}
          type="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        ></Input>
      </CustomDiv>
      <div className="actions">
        <CustomTextButton type="button">Create a new account</CustomTextButton>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
