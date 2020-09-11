import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					className='home__image'
					src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
					alt=''
				/>

				<div className='home__row'>
					<Product
						id='12321341'
						title='Lamaze Peek-A-Boo Forest, Fun Interactive Baby Book with Inspiring Rhymes and Stories'
						price={13.69}
						rating={5}
						image='https://images-na.ssl-images-amazon.com/images/I/91xxqc9IwcL._SL1500_.jpg'
					/>
					<Product
						id='49538094'
						title='Instant Pot Lux 6-in-1 Electric Pressure Cooker, Sterilizer Slow Cooker, Rice Cooker, Steamer, Saute, and Warmer, 6 Quart, 12 One-Touch Programs'
						price={79.0}
						rating={4}
						image='https://images-na.ssl-images-amazon.com/images/I/61IzKouqj1L._AC_SL1500_.jpg'
					/>
				</div>

				<div className='home__row'>
					<Product
						id='4903850'
						title='Sensodyne Pronamel Gentle Teeth Whitening Enamel Toothpaste for Sensitive Teeth, to Reharden and Strengthen Enamel, Alpine Breeze - 4 Ounces (Pack of 3)'
						price={199.99}
						rating={3}
						image='https://images-na.ssl-images-amazon.com/images/I/81sLHGH9HBL._SX522_.jpg'
					/>
					<Product
						id='23445930'
						title='OtterBox Defender Series Case for iPad Pro 12.9" (3rd Gen - ONLY) - Retail Packaging - Black'
						price={16.96}
						rating={5}
						image='https://images-na.ssl-images-amazon.com/images/I/51pUYchnV8L._AC_SX679_.jpg'
					/>
					<Product
						id='3254354345'
						title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
						price={598.99}
						rating={4}
						image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
					/>
				</div>

				<div className='home__row'>
					<Product
						id='90829332'
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
