import { allSongsConfig } from "./allSongs-config";

export const PlaylistConfig = () => {
  const [allSongs, isLoading] = allSongsConfig();

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
