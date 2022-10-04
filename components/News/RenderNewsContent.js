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
    fontFamily: "Poppins700",
    margin: "10px",
    fontSize: "16px",
    lineHeight: "27px",
  },
  div: { margin: "10px" },
  a: { color: "green" },
  p: { fontSize: "15px", marginBottom: "10px" },
  h2: { fontSize: "16px", margin: "20px 0" },
};

export const RenderNewsContent = ({ content }) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <View>
        <RenderHtml
          source={{ html: content }}
          contentWidth={width}
          tagsStyles={tagsStyles}
          startInLoadingState={false}
        />
      </View>
    </View>
  );
};
