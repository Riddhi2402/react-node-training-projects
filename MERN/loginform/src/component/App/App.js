import React from 'react';
import NewUserForm from '../NewUserForm/index';
import { Route, Switch } from 'react-router-dom';
import Splash from '../Splash/index';
import Scroll from '../Scroll/index';
import DragAndDrop from '../DragDrop/index';
import Hover from '../Hover/index';
import Demo from '../ApiFetch/Demo';
import AxiosFetchApi from '../ApiFetch/axios';
import AxiosGet from '../ApiFetch/axiosget';
import AxiosPost from '../ApiFetch/axiospost';
import AxiosPut from '../ApiFetch/axiosput';
import AxiosDelete from '../ApiFetch/axiosdelete';
import Counter from '../ErrorBoundary/counter';
import ErrorBoundary from '../ErrorBoundary/error_boundary';
import FetchGet from '../ApiFetch/fetchget';
import FetchPost from '../ApiFetch/fetchpost';
import ContentPage from '../Internalization/contentpage';
import i18n from '../Internalization/i18n.js';
import RefsComponent from '../Refs/refscomponent';
import PrivateRoute from '../PrivateRoute/privateroute';
import CssDemo from '../CssDemo/cssdemo';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/newuserform" component={NewUserForm} />
        <Route path="/scroll" component={Scroll} />
        <Route path="/draganddrop" component={DragAndDrop} />
        <Route path="/hover" component={Hover} />
        <Route path="/demoapi" component={Demo} />
        <Route path="/axiosapi" component={AxiosFetchApi} />
        <Route path="/axiosget" component={AxiosGet} />
        <Route path="/axiospost" component={AxiosPost} />
        <Route path="/axiosput" component={AxiosPut} />
        <Route path="/axiosdelete" component={AxiosDelete} />
        <Route path="/fetchpost" component={FetchPost} />
        <Route path="/fetchget" component={FetchGet} />
        <PrivateRoute path="/contentpage">
          <ContentPage />
        </PrivateRoute>
        <Route path="/refsdemo" component={RefsComponent} />
        <Route path="/cssdemo" component={CssDemo} />
        {/* <ErrorBoundary>
          <Route path="/counter" component={Counter} />
        </ErrorBoundary> */}
      </Switch>
    </>
  );
};

export default App;
