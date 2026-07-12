// Firebase Ayarları

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
getStorage
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

import {
getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

apiKey:"AIzaSyClZ4vbfNnWPQi6uTwbJH_6d1TRM_OoBqE",

authDomain:"deneme-a4c1e.firebaseapp.com",

projectId:"deneme-a4c1e",

storageBucket:"deneme-a4c1e.firebasestorage.app",

messagingSenderId:"582311785485",

appId:"1:582311785485:web:42c688aa9ca5de4bead144"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

const auth = getAuth(app);

export {

db,

storage,

auth

};
