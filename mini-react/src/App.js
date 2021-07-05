import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Register from './components/Register';

import Products from './components/Products';

import ProductDetails from './components/ProductDetails';


import PrivateRoute from './components/PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useHistory,
  // useLocation
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
          <Route
            path="/products/:slug"
            render={({ match }, ...rest) => {

              return <ProductDetails rest={rest} match={match} />;
            }}
          />
          <PrivateRoute path="/">
            <Products />
          </PrivateRoute>

        </Switch>
      </Router>


    </div>
  );
}

export default App;







