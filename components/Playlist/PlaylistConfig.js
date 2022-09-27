import { useState, useEffect } from "react";
import { getAllSongs } from "../../firebase/firebase-config";

export const PlaylistConfig = () => {
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

  const twentyTwenty = allSongs.filter((track) => {
    if (track[0].playlist.includes("2020")) {
      return track[0];
    }
  });

  const Street = allSongs.filter((track) => {
    if (track[0].playlist.includes("Street")) {
      return track[0];
    }
  });

  const WorkOut = allSongs.filter((track) => {
    if (track[0].playlist.includes("Workout")) {
      return track[0];
    }
  });

  const ChopLife = allSongs.filter((track) => {
    if (track[0].playlist.includes("Choplife")) {
      return track[0];
    }
  });

  const Drive = allSongs.filter((track) => {
    if (track[0].playlist.includes("Drive")) {
      return track[0];
    }
  });

  const Hiphop = allSongs.filter((track) => {
    if (track[0].playlist.includes("Hip Hop")) {
      return track[0];
    }
  });

  const Reggae = allSongs.filter((track) => {
    if (track[0].playlist.includes("Reggae")) {
      return track[0];
    }
  });

  const Piano = allSongs.filter((track) => {
    if (track[0].playlist.includes("Piano")) {
      return track[0];
    }
  });

  const office = allSongs.filter((track) => {
    if (track[0].playlist.includes("office")) {
      return track[0];
    }
  });

  const female = allSongs.filter((track) => {
    if (track[0].playlist.includes("female")) {
      return track[0];
    }
  });

  return [
    isLoading,
    twentyTwenty,
    Street,
    WorkOut,
    ChopLife,
    Drive,
    Hiphop,
    Reggae,
    Piano,
    office,
    female,
  ];
};
