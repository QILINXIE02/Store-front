import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Checkout from './Checkout';

const mockStore = configureStore([]);

describe('Checkout', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cart: {
        items: [
          {
            product: { _id: '1', name: 'Product 1', price: 10 },
            quantity: 2,
          },
        ],
        total: 20,
      },
    });

    render(
      <Provider store={store}>
        <Checkout />
      </Provider>
    );
  });

  it('should display cart items', () => {
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
    expect(screen.getByText('Price: $20.00')).toBeInTheDocument();
  });

  it('should display the total price', () => {
    expect(screen.getByText('Total: $20.00')).toBeInTheDocument();
  });

  it('should handle purchase', () => {
    fireEvent.click(screen.getByText('Confirm Purchase'));
    expect(window.alert).toHaveBeenCalledWith('Purchase Successful!');
  });
});
