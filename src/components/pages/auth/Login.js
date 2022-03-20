import React, { useEffect, useState } from "react";
import { Website } from "../../layouts/Website";
import { Container, Button, Label } from "./Style";
import { Link } from "react-router-dom";
import Alert from "../../partials/alerts/alert";
import { login } from "../../../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

export const Login = () => {
  const authState = useSelector((state) => state.auth);
  const { loggedIn, loading } = authState;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) navigate("/");
  }, [dispatch, loggedIn, navigate]);

  const [state, setState] = useState({});
  const inputChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(login(state));
  };
  return (
    <Website>
      <Container>
        <form>
          <h1>Sign in</h1>
          <Alert type="danger" />
          <div className="rows">
            <div className="cols">
              <Label>Email</Label>
              <input name="email" onChange={inputChangeHandler} type="email" />
            </div>

            <div className="cols">
              <Label>Password</Label>
              <input
                name="password"
                onChange={inputChangeHandler}
                type="password"
              />
            </div>
          </div>

          <Button onClick={submitHandler}>
            Sign in {loading ? <Spin /> : ""}
          </Button>
          <span>
            Don't have an account ? <Link to="/sign-up">Sign up</Link>
          </span>
        </form>
      </Container>
    </Website>
  );
};
