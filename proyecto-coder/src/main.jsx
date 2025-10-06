import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Carrito from './components/context.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxItPHeT2zNMhAGD2hpd3gs-V_OPgJIo0",
  authDomain: "tienda-videojuegos-cb30a.firebaseapp.com",
  projectId: "tienda-videojuegos-cb30a",
  storageBucket: "tienda-videojuegos-cb30a.firebasestorage.app",
  messagingSenderId: "872906557211",
  appId: "1:872906557211:web:c999088678a877dfadb5be",
  measurementId: "G-C1LNWQZZTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <Carrito>
    <App />
  </Carrito>,
)
