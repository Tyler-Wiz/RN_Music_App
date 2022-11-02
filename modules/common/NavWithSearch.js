import {
  StyleSheet,
  Text,
  View,
  Platform,
  Animated,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/color";
import { useState, useRef } from "react";
import { SearchInput } from "../common/SearchInput";

export const NavWithSearch = ({ description, data, setLoadedData }) => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const slideDown = useRef(new Animated.Value(-20)).current;

  const animatedSearch = () => {
    Animated.timing(slideDown, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  // Search Function //
  const searchArtist = (text) => {
    setLoadedData(
      data.filter((artist) =>
        artist.trackName.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons
            name="chevron-back"
            size={24}
            color={GlobalStyles.colors.iconColor}
          />
        </Pressable>

        <Text style={styles.description}>{description}</Text>
        <Pressable
          onPress={() => {
            setIsVisible(!isVisible);
            animatedSearch();
          }}>
          <Ionicons
            name="ios-search-outline"
            size={24}
            color={GlobalStyles.colors.iconColor}
            style={styles.search}
          />
        </Pressable>
      </View>
      <Animated.View
        style={{
          position: "relative",
          transform: [
            {
              translateY: slideDown,
            },
          ],
        }}>
        {isVisible && (
          <SearchInput
            placeholder="Type Artist, Song or Lyrics"
            autoCorrect={false}
            onUpdateValue={(text) => {
              searchArtist(text);
            }}
          />
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    marginVertical: Platform.OS === "ios" ? 0 : 30,
  },
  search: { marginRight: 10 },
  description: {
    color: GlobalStyles.colors.accentPrimary,
    fontSize: 15,
    fontFamily: "Poppins600",
  },
});
