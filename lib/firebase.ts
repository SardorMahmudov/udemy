import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyDk4WyHkUDA06cnXJAzCOxZ6fes8yGbqsE',
	authDomain: 'praktikum-6688a.firebaseapp.com',
	projectId: 'praktikum-6688a',
	storageBucket: 'praktikum-6688a.appspot.com',
	messagingSenderId: '767705133102',
	appId: '1:767705133102:web:2a071114e6f42d27f9efbf',
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export { storage }
