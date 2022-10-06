import { StyleSheet, Text, View, Pressable } from "react-native";
import { useContext } from "react";
import { SongContext } from "../../store/Song-Context";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const RenderRemoveContent = ({ id }) => {
  const songCtx = useContext(SongContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Pressable
          style={styles.bookmarkText}
          onPress={() => {
            songCtx.removeSong(id);
            navigation.goBack();
          }}>
          <MaterialCommunityIcons
            name="delete-forever"
            size={24}
            color="black"
          />
          <Text style={styles.add}>Remove to favorites</Text>
        </Pressable>
        <Pressable
          style={styles.bookmarkText}
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialCommunityIcons
            name="account-music-outline"
            size={24}
            color="black"
          />
          <Text style={styles.add}>Go to Artist</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.close}
        onPress={() => {
          navigation.goBack();
        }}>
        <Ionicons name="ios-close-outline" size={40} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bookmarkText: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    marginLeft: 15,
  },
  add: {
    color: "black",
    fontSize: 14,
    fontFamily: "Poppins500",
    marginLeft: 15,
  },
  close: {
    marginRight: 15,
  },
});
