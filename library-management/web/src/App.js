import { Route, Switch } from 'react-router-dom';
import Login from './components/login/LoginForm';
import Registration from './components/registration/RegistrationForm';
import BooksList from './components/books/BooksList';
import ProtectedRoute from './components/books/ProtectedRoute';
import AddBook from './components/books/AddBook';
import environmentConfig from './build-distribution/environment-configs';

function App() {
  console.log('process.env', process.env);
  console.log('environmentConfig.SERVER_SIDE_DOMAIN', environmentConfig.SERVER_SIDE_DOMAIN);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Registration} />
        <ProtectedRoute exact path="/books" component={BooksList} />
        <Route path="/books/add" component={AddBook} />
      </Switch>
    </div>
  );
}

export default App;
