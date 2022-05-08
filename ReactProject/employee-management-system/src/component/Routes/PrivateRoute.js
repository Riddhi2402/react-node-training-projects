import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const auth = true;
  return (
    <Route
      render={() => (auth ? props.component : <Redirect to={"/"} />)}
    ></Route>
  );
};

export default PrivateRoute;
