import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

import {
  Home,
  About,
  Auth,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  Products,
  SingleProduct,
  AuthWrapper,
} from './pages';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/products' exact component={Products} />
          <Route path='/products/:id' exact component={SingleProduct} />
          <Route path='/auth' exact component={Auth} />
          <Route path='/cart' exact component={Cart} />
          <PrivateRoute path='/checkout' exact component={Checkout} />
          <Route path='*' component={Error} />
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
