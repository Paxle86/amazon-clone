import React from 'react';
import './Home.css';
import Product from '../product/Product';

const Home = () => {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					className='home__image'
					src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
					alt='hero'
				/>
				<div className='home__row'>
					<Product
						id='1'
						title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
						price={29.99}
						image='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg'
						rating={5}
					/>
					<Product
						id='2'
						title='Kenwood KM283 Prospero Stand Mixer 220-240 Volt/ 50-60 Hz, FOR OVERSEAS USE ONLY, (INTERNATIONAL VOLT & PLUG) WILL NOT WORK IN THE US, OUR PRODUCT ARE BRAND NEW, WE DO NOT SELL USED OR REFURBISHED.'
						price={129.99}
						image='https://m.media-amazon.com/images/I/71k-VhLpK5L._AC_UY218_.jpg'
						rating={4}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='3'
						title='Willful Smart Watch for Android Phones and iOS Phones Compatible iPhone Samsung, IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor Smart Watches for Men Women Black'
						price={35.99}
						image='https://m.media-amazon.com/images/I/51oAPLRW9DL._AC_UY218_.jpg'
						rating={4}
					/>
					<Product
						id='4'
						title='Polk Audio Command Sound Bar with Handsfree Amazon Alexa Voice Control (New Update with Multi-Room Music Built-In), 4K HDMI, and Fire TV Compatible for Your Home Theater'
						price={199.0}
						image='https://m.media-amazon.com/images/I/81vVnPa12-L._AC_UY218_.jpg'
						rating={3}
					/>
					<Product
						id='5'
						title='Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)'
						price={349.99}
						image='https://m.media-amazon.com/images/I/71Ha06XS-VL._AC_UY218_.jpg'
						rating={5}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='6'
						title='SAMSUNG 75-inch Class QLED Q60T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN75Q60TAFXZA, 2020 Model)'
						price={1269.95}
						image='https://m.media-amazon.com/images/I/81fkfrkmjSL._AC_UY218_.jpg'
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
