import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Categories from './components/storefront/Categories.jsx';
import Products from './components/products/Products';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Categories/>
        <Products/>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
