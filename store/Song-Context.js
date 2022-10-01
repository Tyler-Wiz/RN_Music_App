import { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, updateDoc, increment } from "firebase/firestore/lite";
import { db } from "../firebase/firebase-config";

export const SongContext = createContext({
  BookMarkSongs: () => {},
  BookMarkPlaylist: () => {},
  removeSong: () => {},
  markSongs: [],
  markArtist: [],
  markPlaylist: [],
  isVisible: false,
  setIsVisible: () => {},
});

export const SongProvider = ({ children }) => {
  const [markSongs, setMarkSongs] = useState([]);
  const [markPlaylist, setMarkPlaylist] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const BookMarkSongs = async (artist, track, image, lyrics, youtubeId, id) => {
    setMarkSongs((prevState) => [
      ...prevState,
      { artist, track, image, lyrics, youtubeId, id },
    ]);
    await AsyncStorage.setItem("Songs", JSON.stringify(markSongs));
  };

  const BookMarkPlaylist = async (name) => {
    setMarkPlaylist((prevState) => [...prevState, name]);
  };

  const removeSong = async (id) => {
    try {
      const index = markSongs.indexOf(id);
      markSongs.splice(index, 1);
      await AsyncStorage.setItem("Songs", JSON.stringify(markSongs));
      setMarkSongs(JSON.parse(await AsyncStorage.getItem("Songs")));
    } catch (error) {
      console.log(error);
    }
  };

  const loadSong = async () => {
    try {
      let song = await AsyncStorage.getItem("Songs");
      if (song !== null) {
        let storedSong = JSON.parse(song);
        setMarkSongs(storedSong);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadSong();
  }, []);

  const value = {
    BookMarkSongs: BookMarkSongs,
    BookMarkPlaylist: BookMarkPlaylist,
    markSongs: markSongs,
    markPlaylist: markPlaylist,
    isVisible: isVisible,
    setIsVisible: setIsVisible,
    removeSong: removeSong,
  };

  return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};
