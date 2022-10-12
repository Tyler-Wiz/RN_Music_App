import { useState, useEffect } from "react";
import { getAllSongs } from "../../firebase/firebase-config";

export const allSongsConfig = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allSongs, setAllSongs] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const tracks = await getAllSongs();
    let trackAll = [];
    tracks.forEach((track) => {
      trackAll.push({ id: track.id, ...track.data() });
    });
    setAllSongs([...trackAll]);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return [allSongs, isLoading];
};
