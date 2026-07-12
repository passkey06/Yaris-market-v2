import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_URXNzAUoTB2CC2i1eA82yu_Zqn2BZA8",
  authDomain: "yarismarketv2.firebaseapp.com",
  projectId: "yarismarketv2",
  storageBucket: "yarismarketv2.firebasestorage.app",
  messagingSenderId: "1004805018905",
  appId: "1:1004805018905:web:097cb7117ed4d214e22188"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
