import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/color";
import { TrackNavigation } from "../modules/common/TrackNavigation";
import { RenderNewsContent } from "../components/News/RenderNewsContent";

export const NewsScreen = ({ route }) => {
  const title = route.params.title;
  const image = route.params.image;
  const content = route.params.content;
  const author = route.params.author;
  const date = route.params.date;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <TrackNavigation />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.author}>{author} </Text>
            <Text style={styles.time}>{date}</Text>
          </View>
          <Image source={{ uri: image }} style={styles.image} />
          <RenderNewsContent content={content} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    padding: 15,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  title: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 20,
    fontFamily: "Poppins500",
    width: "100%",
    marginBottom: 10,
    textAlign: "center",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  author: {
    color: GlobalStyles.colors.accentPrimary,
    fontSize: 11,
    fontFamily: "Poppins500",
    textTransform: "uppercase",
  },
  time: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 11,
    fontFamily: "Poppins500",
  },
});
