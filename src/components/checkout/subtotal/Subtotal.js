import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../StateProvider';

export const Subtotal = () => {
	const [{ basket }, dispatch] = useStateValue();
	console.log(basket);
	const getBasketTotal = (arr) =>
		arr.reduce(function (acc, obj) {
			return acc + obj.price;
		}, 0);
	return (
		<div className='subtotal'>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket?.length} items) :<strong>{` ${value}`}</strong>
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
