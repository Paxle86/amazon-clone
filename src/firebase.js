import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyC9AhaaiSCZo5_j0L3jD-FCbODnnWrFgmg',
	authDomain: 'clone-d176a.firebaseapp.com',
	databaseURL: 'https://clone-d176a.firebaseio.com',
	projectId: 'clone-d176a',
	storageBucket: 'clone-d176a.appspot.com',
	messagingSenderId: '894112632102',
	appId: '1:894112632102:web:ad151fb8d58155360c85e7',
	measurementId: 'G-M7CRXP8E0X',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
