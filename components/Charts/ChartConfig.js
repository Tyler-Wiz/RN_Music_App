import { useState, useEffect } from "react";
import { getChart } from "../../firebase/firebase-config";

export const ChartConfig = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chart, setChart] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const tracks = await getChart();
    let trackAll = [];
    tracks.forEach((track) => {
      trackAll.push({ id: track.id, ...track.data() });
    });
    setChart([...trackAll]);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return [chart, isLoading];
};
