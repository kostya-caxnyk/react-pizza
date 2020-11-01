import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Cart, Home } from './pages';

const App = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
};

export default App;
