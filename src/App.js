import React from 'react'
import Categories from './components/Categories';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { useState } from 'react';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import Collapse from '@material-ui/core/Collapse';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(50 90% 60%)',
    },
    secondary: {
      main: '#f0f8ff',
    },
  },
});
function App() {
  const [showCartList, setshowCartList] = useState(false)
  function handleShow() {
    setshowCartList(!showCartList);
  }
 
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
          contrastText:"rgb(0, 0, 0)"
          
        }}
        TransitionComponent={Collapse}
        style={{backgroundColor:"rgba(255, 204, 128, 0.747) " ,color:'black', marginTop:"25px"}}
      >
          <Header show={handleShow} />
          <Categories />
          {showCartList && <Cart />}
          <Products />
          <Footer />
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );

}

export default App;
