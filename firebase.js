// ТВОИ КЛЮЧИ УЖЕ ВСТАВЛЕНЫ
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
 apiKey: "AIzaSyDfBXs-5Z19YQSej-2MWDbHGgqTn6eFYOM",
 authDomain: "novachat-608a1.firebaseapp.com",
 projectId: "novachat-608a1",
 storageBucket: "novachat-608a1.firebasestorage.app",
 messagingSenderId: "488785030390",
 appId: "1:488785030390:web:f97b0135bb38f0cb8b10d7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);