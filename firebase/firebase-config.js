import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWP68vTiDzT-3xaapQSmZxMvoX6anzYmk",
  authDomain: "plug-26bab.firebaseapp.com",
  projectId: "plug-26bab",
  storageBucket: "plug-26bab.appspot.com",
  messagingSenderId: "454059640444",
  appId: "1:454059640444:web:a57bc5b35940cc03e5abf9",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = getFirestore();

export const getAllSongs = async () => {
  const querySnapshot = await getDocs(collection(db, "Songs"));
  return querySnapshot;
};

export const getChart = async () => {
  const querySnapshot = await getDocs(collection(db, "Chart"));
  return querySnapshot;
};

export const getAlbums = async () => {
  const querySnapshot = await getDocs(collection(db, "Albums"));
  return querySnapshot;
};

export const getAlbumSongs = async (itemId) => {
  const allLyrics = await getDocs(collection(db, "Albums", itemId, "songs"));
  return allLyrics;
};
