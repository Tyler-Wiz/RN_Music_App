import { useState, useEffect } from "react";
import { getAllSongs } from "../../firebase/firebase-config";

export const NewReleaseConfig = () => {
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

  const newRelease = allSongs.filter((track) => {
    if (track.category.includes("new")) {
      return track;
    }
  });

  return [isLoading, newRelease];
};
