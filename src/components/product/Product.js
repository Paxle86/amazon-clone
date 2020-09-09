import React from 'react';
import './Product.css';
import { useStateValue } from '../../StateProvider';
import { ADD_TO_BASKET } from '../../type';

const Product = ({ id, title, image, price, rating }) => {
	const [state, dispatch] = useStateValue();
	const addToBasket = () => {
		// dispatch some action into the data layer
		dispatch({
			type: ADD_TO_BASKET,
			item: {
				id,
				title,
				image,
				price,
				rating,
			},
		});
	};
	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
			</div>
			<img src={image} alt='book' />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
};

export default Product;
