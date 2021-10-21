import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import PlaceOder from './components/PlaceOder/PlaceOder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';


function App() {
  return (
    <div>
      <AuthProvider>

      <Router>
      <Header />
        <Switch>

          <Route exact path='/'>
            <Shop />
          </Route>

          <Route exact path='/shop'>
            <Shop />
          </Route>

          <Route path='/review'>
            <OrderReview />
          </Route>

          <Route path='/inventory'>
            <Inventory />
          </Route>

          <PrivateRoute path='/placeoder'>
            <PlaceOder />
          </PrivateRoute>

          <PrivateRoute path='/shipping'>
            <Shipping />
          </PrivateRoute>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>
      </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
