import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ArtistConfig } from "../firebase/ArtistConfig";
import { Artists } from "../Data/data";
import { useNavigation } from "@react-navigation/native";

export const ArtistSearch = () => {
  const [allSongs, wizkid, Burna, Fireboy, Kizz, Asake, Tiwa, Davido, Tems] =
    ArtistConfig();
  const navigation = useNavigation();

  const RenderList = ({ data, artist, color }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PlaylistSongs", {
            data: data,
            img: artist.imageUrl,
          });
        }}>
        <View style={[styles.container, { backgroundColor: color }]}>
          <Text style={styles.artist}>{artist.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      {Artists.map((artist, i) => {
        if (i === 0) {
          return (
            <View key={i}>
              <RenderList data={wizkid} artist={artist} color="#7C53D0" />
            </View>
          );
        }
        if (i === 1) {
          return (
            <View key={i}>
              <RenderList data={Burna} artist={artist} />
            </View>
          );
        }
        if (i === 2) {
          return (
            <View key={i}>
              <RenderList data={Fireboy} artist={artist} color="#7C53D0" />
            </View>
          );
        }
        if (i === 3) {
          return (
            <View key={i}>
              <RenderList data={Kizz} artist={artist} />
            </View>
          );
        }
        if (i === 4) {
          return (
            <View key={i}>
              <RenderList data={Asake} artist={artist} />
            </View>
          );
        }
        if (i === 5) {
          return (
            <View key={i}>
              <RenderList data={Tiwa} artist={artist} color="#7C53D0" />
            </View>
          );
        }
        if (i === 6) {
          return (
            <View key={i}>
              <RenderList data={Davido} artist={artist} />
            </View>
          );
        }
        if (i === 7) {
          return (
            <View key={i}>
              <RenderList data={Tems} artist={artist} color="#7C53D0" />
            </View>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  image: { width: 70, height: 70, marginRight: 15, borderRadius: 5 },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 10,
  },
  container: {
    borderColor: "#4c4c4c",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  artist: {
    color: "white",
    fontSize: 13,
    fontFamily: "Poppins500",
    textTransform: "capitalize",
  },
});
