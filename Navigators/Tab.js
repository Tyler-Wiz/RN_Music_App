import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/color";

const Tab = createBottomTabNavigator();
import { HomeScreen } from "../screens/HomeScreen";
import { FavoriteScreen } from "../screens/FavoriteScreen";
import { PlaylistScreen } from "../screens/PlaylistScreen";
import { SearchScreen } from "../screens/SearchScreen";

import { Text, Platform } from "react-native";

const homeName = "home";
const playlistName = "playlist";
const libraryName = "library";
const searchName = "search";

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                fontSize: 9,
                color: GlobalStyles.colors.accentPrimary,
                marginTop: -10,
                textTransform: "capitalize",
                fontFamily: "Poppins500",
              }}>
              {focused ? route.name : ""}
            </Text>
          );
        },
        tabBarStyle: {
          paddingBottom: Platform.OS === "ios" ? 25 : 0,
          backgroundColor: GlobalStyles.colors.tabColor,
        },
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          let routeName = route.name;
          let iconSize;

          switch (routeName) {
            case homeName:
              iconName = focused ? "home" : "home-outline";
              iconSize = focused ? 18 : 18;
              break;
            case playlistName:
              iconName = focused ? "ios-list-sharp" : "ios-list-outline";
              iconSize = focused ? 23 : 20;
              break;
            case libraryName:
              iconName = focused ? "musical-notes" : "musical-notes-outline";
              iconSize = focused ? 23 : 20;
              break;
            case searchName:
              iconName = focused ? "ios-search" : "ios-search-outline";
              iconSize = focused ? 23 : 20;
              break;
            default:
              return;
          }
          return (
            <Ionicons
              name={iconName}
              size={iconSize}
              color={GlobalStyles.colors.accentPrimary}
            />
          );
        },
      })}>
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={playlistName} component={PlaylistScreen} />
      <Tab.Screen name={libraryName} component={FavoriteScreen} />
      <Tab.Screen name={searchName} component={SearchScreen} />
    </Tab.Navigator>
  );
};
