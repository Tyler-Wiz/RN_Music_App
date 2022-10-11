import { useState, useEffect } from "react";
import { getAlbums } from "../../firebase/firebase-config";

export const AlbumConfig = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const albumsList = await getAlbums();
    let albumAll = [];
    albumsList.forEach((album) => {
      albumAll.push({ id: album.id, ...album.data() });
    });
    setAlbums([...albumAll]);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return [albums, isLoading];
};
