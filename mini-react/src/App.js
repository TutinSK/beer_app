import './App.css';
import Register from './components/Register';

import Products from './components/Products';

import PrivateRoute from './components/PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
function App() {
  return (
    <div className="App">

      {/* <Router>

        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router> */}


      <Router>
        <Switch>
          <Route path='/register' >
            <Register />
          </Route>
          <PrivateRoute path="/">
            <Products />
          </PrivateRoute>

        </Switch>
      </Router>


    </div>
  );
}

export default App;







