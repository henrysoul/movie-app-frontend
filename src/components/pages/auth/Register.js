import React, { useEffect, useState } from "react";
import { Website } from "../../layouts/Website";
import { Container, Button, Label } from "./Style";
import { Link } from "react-router-dom";
import { register } from "../../../store/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import Alert from "../../partials/alerts/alert";
import { TOGGLE_REGISTERED } from "../../../store/constants/auth";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registered, loading } = useSelector((state) => state.auth);

  const [state, setState] = useState({});
  const inputChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (registered === true) {
      dispatch({ type: TOGGLE_REGISTERED });
      navigate("/sign-in");
    }
  }, [registered, navigate, dispatch]);

  const submitHandler = () => {
    dispatch(register(state));
  };

  return (
    <Website>
      <Container>
        <form onSubmit={submitHandler}>
          <h1>Sign up</h1>

          <div className="rows">
            <Alert type="danger" />
            <div className="cols">
              <Label>Name</Label>
              <input
                name="name"
                required={true}
                onChange={inputChangeHandler}
              />
            </div>

            <div className="cols">
              <Label>Email</Label>
              <input
                name="email"
                required={true}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className="rows">
            <div className="cols">
              <Label>Password</Label>
              <input
                name="password"
                required={true}
                onChange={inputChangeHandler}
                type="password"
              />
            </div>
            <div className="cols">
              <Label>Confrim password</Label>
              <input
                name="password_confirmation"
                required={true}
                onChange={inputChangeHandler}
                type="password"
              />
            </div>
          </div>

          <Button onClick={submitHandler} disabled={loading}>
            Sign up {loading ? <Spin /> : ""}
          </Button>
          <span>
            Already have an account ? <Link to="/sign-in">Login</Link>
          </span>
        </form>
      </Container>
    </Website>
  );
};
