import { useState, useEffect } from "react";
import { getAllSongs } from "../../firebase/firebase-config";

export const TrendNewConfig = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allSongs, setAllSongs] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const tracks = await getAllSongs();
    let trackAll = [];
    tracks.forEach((track) => {
      trackAll.push({ id: track.id, ...track.data() });
    });
    setAllSongs([...trackAll].sort(() => Math.random() - 0.5));
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const trending = allSongs.filter((track) => {
    if (track[0].tag.includes("trending")) {
      return track[0];
    }
  });

  return [isLoading, trending];
};
