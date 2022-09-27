import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
import { HomeScreen } from "../screens/HomeScreen";
import { FavoriteScreen } from "../screens/FavoriteScreen";
import { PlaylistScreen } from "../screens/PlaylistScreen";
import { Text } from "react-native";

const homeName = "home";
const playlistName = "playlist";
const libraryName = "library";

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                fontSize: 10,
                color: "#7C53D0",
                marginTop: -10,
                textTransform: "capitalize",
                fontFamily: "Poppins700",
              }}>
              {focused ? route.name : ""}
            </Text>
          );
        },
        tabBarStyle: { paddingBottom: 25, backgroundColor: "black" },
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          let routeName = route.name;
          let iconSize;

          switch (routeName) {
            case homeName:
              iconName = focused ? "home" : "home-outline";
              iconSize = focused ? 23 : 20;
              break;
            case playlistName:
              iconName = focused ? "ios-list-sharp" : "ios-list-outline";
              iconSize = focused ? 23 : 20;
              break;
            case libraryName:
              iconName = focused ? "musical-notes" : "musical-notes-outline";
              iconSize = focused ? 23 : 20;
              break;
            default:
              return;
          }

          return <Ionicons name={iconName} size={iconSize} color="#7C53D0" />;
        },
      })}>
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={playlistName} component={PlaylistScreen} />
      <Tab.Screen name={libraryName} component={FavoriteScreen} />
    </Tab.Navigator>
  );
};
