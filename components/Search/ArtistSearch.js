import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ArtistConfig } from "./ArtistConfig";
import { Artists } from "../../Data/data";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/color";

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
        switch (i) {
          case 0:
            return <RenderList artist={artist} data={wizkid} />;
          case 1:
            return <RenderList artist={artist} data={Burna} />;
          case 2:
            return <RenderList artist={artist} data={Fireboy} />;
          case 3:
            return <RenderList artist={artist} data={Kizz} />;
          case 4:
            return <RenderList artist={artist} data={Asake} />;
          case 5:
            return <RenderList artist={artist} data={Tiwa} />;
          case 6:
            return <RenderList artist={artist} data={Davido} />;
          case 7:
            return <RenderList artist={artist} data={Tems} />;
          default:
            return;
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
