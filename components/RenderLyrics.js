import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import { View } from "react-native";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const tagsStyles = {
  body: {
    whiteSpace: "normal",
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins700",
    margin: "10px",
  },
  div: { margin: "10px" },
  a: { color: "green" },
  p: { fontSize: "15px", margin: "5px" },
  h2: { fontSize: "16px", margin: "30px 0" },
};

const RenderLyrics = ({ lyrics }) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <View>
        <RenderHtml
          source={{ html: lyrics }}
          contentWidth={width}
          tagsStyles={tagsStyles}
          startInLoadingState={false}
        />
      </View>
    </View>
  );
};

export default RenderLyrics;
