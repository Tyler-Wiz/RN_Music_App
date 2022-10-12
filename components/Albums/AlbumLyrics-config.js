import { useState, useEffect } from "react";
import { getAlbumSongs } from "../../firebase/firebase-config";

export const AlbumLyricsConfig = (id) => {
  const [lyrics, setLyrics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getEachLyrics = async () => {
    setIsLoading(true);
    const lyrics = await getAlbumSongs(id);
    let completeLyrics = [];
    lyrics.forEach((lyrics) => {
      completeLyrics.push({ id: lyrics.id, ...lyrics.data() });
    });
    setLyrics([...completeLyrics]);
    setIsLoading(false);
  };

  useEffect(() => {
    getEachLyrics();
  }, []);

  return [lyrics, isLoading];
};
