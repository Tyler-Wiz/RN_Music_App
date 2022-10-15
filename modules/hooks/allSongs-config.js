import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase-config";
import { collection, onSnapshot } from "firebase/firestore/";

export const allSongsConfig = (active) => {
  const [isLoading, setIsLoading] = useState(false);
  const [allSongs, setAllSongs] = useState([]);

  const colRef = collection(db, "Songs");

  useEffect(() => {
    setIsLoading(true);
    onSnapshot(colRef, (snapshot) => {
      const trackAll = [];
      snapshot.docs.forEach((doc) => {
        trackAll.push({ id: doc.id, ...doc.data() });
      });
      setAllSongs([...trackAll]);
    });
    setIsLoading(false);
  }, []);

  return [allSongs, isLoading];
};
