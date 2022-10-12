import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { allSongsConfig } from "../modules/hooks/allSongs-config";
import { ImgConfig } from "../modules/hooks/Img-Config";
import { GlobalStyles } from "../constants/color";
import { MaterialIcons } from "@expo/vector-icons";
import { RenderSongs } from "../components/RenderSongs";

export const ArtistScreen = ({ route, navigation }) => {
  const [allSongs, isLoading] = allSongsConfig();
  const [allImgs] = ImgConfig();
  const artist = route.params.artist;

  const data = allSongs.filter((track) => {
    if (track.artistName.includes(artist)) {
      return track;
    }
  });

  const image = allImgs.filter((img) => {
    if (img.name.includes(artist)) {
      return img;
    }
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Pressable
            onPress={() => {
              navigation.navigate("home");
            }}>
            <MaterialIcons
              name="arrow-back-ios"
              size={18}
              color="white"
              style={styles.icon}
            />
          </Pressable>
          {image &&
            image.map((item, i) => (
              <View key={i} style={styles.imgContainer}>
                <Image source={{ uri: item.url }} style={styles.image} />
              </View>
            ))}
          <Text style={styles.artistName}>{artist}</Text>
          {data &&
            data.map((item, i) => (
              <View key={i}>
                <RenderSongs item={item} />
              </View>
            ))}
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
    paddingHorizontal: 15,
    marginTop: 20,
    flex: 1,
  },
  artistName: {
    color: GlobalStyles.colors.primaryText,
    fontSize: 18,
    fontFamily: "Poppins600",
    marginRight: 10,
    textAlign: "center",
    marginBottom: 30,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginVertical: 10,
  },
});
