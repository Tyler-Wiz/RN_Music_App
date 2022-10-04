import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { NewsContentData } from "../../Data/data";
import { GlobalStyles } from "../../constants/color";
import { useNavigation } from "@react-navigation/native";

export const NewsContent = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.descContainer}>
        <Text style={styles.news}>News</Text>
        <View
          style={{
            backgroundColor: "white",
            width: "95%",
            height: 0.6,
            marginLeft: 10,
          }}
        />
      </View>
      {NewsContentData.map((item, i) => {
        return (
          <Pressable
            style={styles.container}
            key={i}
            onPress={() => {
              navigation.navigate("News", {
                title: item.title,
                image: item.image,
                content: item.content,
                author: item.Author,
                date: item.date,
              });
            }}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.detailsContainer}>
              {item.title.length < 75 ? (
                <Text style={styles.title}>{item.title}</Text>
              ) : (
                <Text style={[styles.title, { width: "35%" }]}>
                  {item.title}
                </Text>
              )}
              <View style={styles.timeContainer}>
                <Text style={styles.time}>By</Text>
                <Text style={styles.author}>{item.Author} </Text>
                <Text style={styles.time}>{item.date}</Text>
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
  },
  descContainer: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  news: {
    color: GlobalStyles.colors.accentPrimary,
    fontSize: 13,
    fontFamily: "Poppins500",
    textTransform: "uppercase",
  },
  image: {
    width: 130,
    height: 90,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  title: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 13,
    fontFamily: "Poppins700",
    width: "45%",
    marginBottom: 5,
  },
  timeContainer: {
    flexDirection: "row",
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
    marginRight: 5,
  },
});
