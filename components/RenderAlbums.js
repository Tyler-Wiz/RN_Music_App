import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constants/color";

export const RenderAlbums = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("Album", {
            itemId: item.id,
            featuredImg: item[0].artwork,
            albumName: item[0].AlbumName,
            artistName: item[0].artistName,
          });
        }}>
        <Image source={{ uri: item[0].artwork }} style={styles.artwork} />
        <Text style={styles.artist}>{item[0].AlbumName}</Text>
        <Text style={styles.track}>{item[0].artistName}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginRight: 10,
  },
  artist: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 13,
    fontFamily: "Poppins500",
    width: "95%",
  },
  artwork: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  track: {
    color: GlobalStyles.colors.secondaryText,
    fontSize: 11,
    fontFamily: "Poppins600",
  },
});
