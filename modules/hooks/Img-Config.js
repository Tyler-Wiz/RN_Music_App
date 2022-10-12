import { useState, useEffect } from "react";
import { getImg } from "../../firebase/firebase-config";

export const ImgConfig = () => {
  const [allImgs, setAllImgs] = useState([]);

  const getData = async () => {
    const imgs = await getImg();
    let imgAll = [];
    imgs.forEach((img) => {
      imgAll.push({ id: img.id, ...img.data() });
    });
    setAllImgs([...imgAll]);
  };

  useEffect(() => {
    getData();
  }, []);

  return [allImgs];
};
