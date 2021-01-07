import React, { useContext } from "react";
import queryString from "query-string";
import { AuthContext } from "../../auth/AuthContext";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";
import { useLocation } from "react-router-dom";

export const LoginScreen = ({ history }) => {
  const location = useLocation();
  const { dispatch } = useContext(AuthContext);
  const { u = "" } = queryString.parse(location.search);
  const [formValues, handleInputChange] = useForm({
    name: u,
  });

  const { name } = formValues;
  console.log(formValues);
  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    dispatch({
      type: types.login,
      payload: {
        name: name,
      },
    });

    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Type your username"
              className="form-control"
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
            />
            <br />
            <button className="btn btn-primary" /* onClick={handleLogin} */>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
