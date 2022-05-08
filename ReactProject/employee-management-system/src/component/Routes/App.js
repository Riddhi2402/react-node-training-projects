import { Route, Switch } from "react-router-dom";
import WelcomePage from "../WelcomePage/Welcome";
import LoginPage from "../LoginPage/Login";
import SignUpPage from "../SignUpPage/Signup";
import PrivateRoute from "./PrivateRoute";
import EmployeeTable from "../EmployeeData/EmployeeTable";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomePage}></Route>
      <Route path="/signup" component={SignUpPage}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <PrivateRoute path="/employeetable" component={EmployeeTable}></PrivateRoute>
    </Switch>
  );
};

export default App;
