import { Route, Switch } from 'react-router-dom';
import DisplayData from './Components/DisplayData';
import FirebaseLogin from './Components/FirebaseLogin';
import Form from './Components/Form';
import TodoList from './Components/JsonPlaceholder';
import JsonSchemaForm from './Components/JsonSchemaForm';
import PaymentGateway from './Components/RemitaPaymentGateway';
import ShowList from './Components/ShowList';
import UpdateForm from './Components/updateForm';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Form} />
      <Route path="/jsonschemaform" component={JsonSchemaForm} />
      <Route path="/displaydata" component={DisplayData} />
      <Route path="/showlist" component={ShowList} />
      <Route path="/updateuser/:id" component={UpdateForm} />
      <Route path="/firebaselogin" component={FirebaseLogin} />
      <Route path="/payment" component={PaymentGateway} />
      <Route path="/todolist" component={TodoList} />
    </Switch>
  );
};

export default App;
