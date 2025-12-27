import { auth, db, storage } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc, setDoc, updateDoc, getDoc, serverTimestamp, query, where, getDocs, collection
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
  uploadBytes, getDownloadURL, ref
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";