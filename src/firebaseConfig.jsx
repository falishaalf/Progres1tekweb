// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase config (gunakan konfigurasi Firebase Anda)
const firebaseConfig = {
  apiKey: "AIzaSyBizBYukUiTK9Y7WOuL55gDrgPu3ToZQzg",
  authDomain: "tekweb-f4b32.firebaseapp.com",
  databaseURL: "https://tekweb-f4b32-default-rtdb.firebaseio.com",
  projectId: "tekweb-f4b32",
  storageBucket: "tekweb-f4b32.firebasestorage.app",
  messagingSenderId: "749145466342",
  appId: "1:749145466342:web:73f7bdb37ae8b7e1d9e227",
  measurementId: "G-S5JG0S31G3"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };  // Ekspor aplikasi Firebase agar bisa digunakan di file lain
