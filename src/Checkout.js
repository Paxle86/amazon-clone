import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const StyledFlex = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: white;
	height: max-content;

	.transition-enter {
		opacity: 0.01;
		transform: translate(0, -10px);
	}

	.transition-enter-active {
		opacity: 1;
		transform: translate(0, 0);
		transition: all 300ms ease-in-out;
	}

	.transition-exit {
		opacity: 1;
		transform: translate(10px›, 10px);
	}

	.transition-exit-active {
		opacity: 0.01;
		transform: translate(10px, 10px);
		transition: all 300ms ease-in-out;
	}
`;

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className='checkout'>
			<div className='checkout__left'>
				<img
					className='checkout__ad'
					src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
					alt=''
				/>

				<div>
					<h3>Hello, {user?.email}</h3>
					<h2 className='checkout__title'>Your shopping Basket</h2>
					<TransitionGroup component={StyledFlex}>
						{basket.map((item) => (
							<CSSTransition
								key={item.index}
								timeout={500}
								classNames='transition'
							>
								<CheckoutProduct
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
			</div>

			<div className='checkout__right'>
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
