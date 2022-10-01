import { allSongsConfig } from "./allSongs-config";

export const ArtistConfig = () => {
  const [allSongs, isLoading] = allSongsConfig();

  const wizkid = allSongs.filter((track) => {
    if (track.artistName.includes("Wizkid")) {
      return track;
    }
  });

  const Burna = allSongs.filter((track) => {
    if (track.artistName.includes("Burna")) {
      return track;
    }
  });

  const Fireboy = allSongs.filter((track) => {
    if (track.artistName.includes("Fireboy")) {
      return track;
    }
  });
  const Kizz = allSongs.filter((track) => {
    if (track.artistName.includes("Kizz")) {
      return track;
    }
  });
  const Asake = allSongs.filter((track) => {
    if (track.artistName.includes("Asake")) {
      return track;
    }
  });
  const Tiwa = allSongs.filter((track) => {
    if (track.artistName.includes("Tiwa")) {
      return track;
    }
  });

  const Davido = allSongs.filter((track) => {
    if (track.artistName.includes("Davido")) {
      return track;
    }
  });

  const Tems = allSongs.filter((track) => {
    if (track.artistName.includes("Tems")) {
      return track;
    }
  });

  return [allSongs, wizkid, Burna, Fireboy, Kizz, Asake, Tiwa, Davido, Tems];
};
