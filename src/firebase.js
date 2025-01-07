
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyD77kQqf8KW5C6Y4tHia19B02lEexj03H8",
  authDomain: "arms-b1df6.firebaseapp.com",
  databaseURL: "https://arms-b1df6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "arms-b1df6",
  storageBucket: "arms-b1df6.firebasestorage.app",
  messagingSenderId: "279260073223",
  appId: "1:279260073223:web:a37f065c2dc623a07bc9a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;