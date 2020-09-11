import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDo5oIVP85Pf44ViL8BUWxXuZyggvJpTV4',
	authDomain: 'fir-874b4.firebaseapp.com',
	databaseURL: 'https://fir-874b4.firebaseio.com',
	projectId: 'fir-874b4',
	storageBucket: 'fir-874b4.appspot.com',
	messagingSenderId: '235960371538',
	appId: '1:235960371538:web:a7ca5925b68aa3d1b5528b',
	measurementId: 'G-SCMT4W1XCL',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
