/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDEAy30tUasXEuP2uLajilyR8KNaeVAn7U',
	authDomain: 'sdanews-acd6d.firebaseapp.com',
	databaseURL:
		'https://sdanews-acd6d-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'sdanews-acd6d',
	storageBucket: 'sdanews-acd6d.appspot.com',
	messagingSenderId: '681013709198',
	appId: '1:681013709198:web:800aa83ab73caa73917cdf',
	measurementId: 'G-TY3HG2Y560',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase();
const storage = getStorage(app);
const fireStore = getFirestore(app);

export default {
	app,
	analytics,
	auth,
	database,
	storage,
	fireStore,
};
