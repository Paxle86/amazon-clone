import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
	const ShoppingBasket = [];
	const getBasketTotal = () => {};
	const basket = [];
	return (
		<div className='subtotal'>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({ShoppingBasket.length} items) :
							<strong>{` ${value}`}</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' /> This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button>Procceed to Checkout</button>
		</div>
	);
};

export default Subtotal;
