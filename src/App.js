import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Categories from './components/Categories';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ProductDetails from './components/ProductDetails'; // Import ProductDetails
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import Collapse from '@material-ui/core/Collapse';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a6e0d4',
    },
    secondary: {
      main: '#f0f8ff',
    },
  },
});

function App() {
  const [showCartList, setShowCartList] = useState(false);
  const cartItems = useSelector(state => state.cart.cartItems);

  useEffect(() => {
    // Re-render component when cartItems changes
  }, [cartItems]);

  const handleShow = () => {
    setShowCartList(!showCartList);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          TransitionComponent={Collapse}
        >
          <Router>
            <Header show={handleShow} />
            <Routes>
              <Route path="/" element={
                <>
                  <Categories />
                  {showCartList && <Cart />}
                  <Products />
                </>
              } />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/product/:productId" element={<ProductDetails />} /> {/* Add ProductDetails route */}
            </Routes>
            <Footer />
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
