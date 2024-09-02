import React, { useEffect, useState, useReducer, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const emailReducerFun = (state, action) => {
  if (action.type === "EMAIL_VALUE") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  } else if (action.type === "EMAIL_VALID_VALUE") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: null,
  };
};

const passwordReducerFun = (state, action) => {
  if (action.type === "PASS_VALUE") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  } else if (action.type === "PASS_VALID_VALUE") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: null,
  };
};

const Login = (props) => {
  const [emailReducerState, dispatchEmailReducer] = useReducer(
    emailReducerFun,
    {
      value: "",
      isValid: null,
    }
  );
  const [passwordReducerState, dispatchPasswordReducer] = useReducer(
    passwordReducerFun,
    {
      value: "",
      isValid: null,
    }
  );

  const { isValid: emailIsValid } = emailReducerState;
  const { isValid: passwordIsValid } = passwordReducerState;

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    console.log("change");
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const [formIsValid, setFormIsValid] = useState(false);
  const emailChangeHandler = (event) => {
    dispatchEmailReducer({ type: "EMAIL_VALUE", val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes("@") &&
    //     passwordReducerState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordReducer({ type: "PASS_VALUE", val: event.target.value });

    // setFormIsValid(
    //   emailReducerState.value.includes("@") &&
    //     event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmailReducer({ type: "EMAIL_VALID_VALUE" });
  };

  const validatePasswordHandler = () => {
    dispatchPasswordReducer({ type: "PASS_VALID_VALUE" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      props.onLogin(emailReducerState.value, passwordReducerState.val);
    } else if (!emailIsValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          label="Email"
          type="email"
          id="email"
          ref={emailRef}
          isValid={emailIsValid}
          value={emailReducerState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          label="Password"
          type="password"
          id="password"
          ref={passwordRef}
          isValid={passwordIsValid}
          value={passwordReducerState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
