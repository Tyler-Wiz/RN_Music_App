import { useState, useEffect } from "react";
import { getAllSongs } from "./firebase-config";

export const ArtistConfig = () => {
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

  const wizkid = allSongs.filter((track) => {
    if (track[0].artistName.includes("Wizkid")) {
      return track[0];
    }
  });

  const Burna = allSongs.filter((track) => {
    if (track[0].artistName.includes("Burna")) {
      return track[0];
    }
  });

  const Fireboy = allSongs.filter((track) => {
    if (track[0].artistName.includes("Fireboy")) {
      return track[0];
    }
  });
  const Kizz = allSongs.filter((track) => {
    if (track[0].artistName.includes("Kizz")) {
      return track[0];
    }
  });
  const Asake = allSongs.filter((track) => {
    if (track[0].artistName.includes("Asake")) {
      return track[0];
    }
  });
  const Tiwa = allSongs.filter((track) => {
    if (track[0].artistName.includes("Tiwa")) {
      return track[0];
    }
  });

  const Davido = allSongs.filter((track) => {
    if (track[0].artistName.includes("Davido")) {
      return track[0];
    }
  });

  const Tems = allSongs.filter((track) => {
    if (track[0].artistName.includes("Tems")) {
      return track[0];
    }
  });

  return [allSongs, wizkid, Burna, Fireboy, Kizz, Asake, Tiwa, Davido, Tems];
};
