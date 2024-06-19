// src/App.js
import React, { useState } from 'react';
import Categories from './components/Categories';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import Collapse from '@material-ui/core/Collapse';

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
