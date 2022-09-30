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
    if (track.playlist.includes("2020")) {
      return track;
    }
  });

  const Street = allSongs.filter((track) => {
    if (track.playlist.includes("Street")) {
      return track;
    }
  });

  const WorkOut = allSongs.filter((track) => {
    if (track.playlist.includes("Workout")) {
      return track;
    }
  });

  const ChopLife = allSongs.filter((track) => {
    if (track.playlist.includes("Choplife")) {
      return track;
    }
  });

  const Drive = allSongs.filter((track) => {
    if (track.playlist.includes("Drive")) {
      return track;
    }
  });

  const Hiphop = allSongs.filter((track) => {
    if (track.playlist.includes("Hip Hop")) {
      return track;
    }
  });

  const Reggae = allSongs.filter((track) => {
    if (track.playlist.includes("Reggae")) {
      return track;
    }
  });

  const Piano = allSongs.filter((track) => {
    if (track.playlist.includes("Piano")) {
      return track;
    }
  });

  const office = allSongs.filter((track) => {
    if (track.playlist.includes("office")) {
      return track;
    }
  });

  const female = allSongs.filter((track) => {
    if (track.playlist.includes("female")) {
      return track;
    }
  });

  const Bedroom = allSongs.filter((track) => {
    if (track.playlist.includes("Bedroom")) {
      return track;
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
    Bedroom,
  ];
};
