import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyTabs } from "./Tab";
import { TrackScreen } from "../screens/TrackScreen";
import { ChartScreen } from "../screens/ChartScreen";
import AlbumScreen from "../screens/AlbumScreen";
import { PlaylistSongsScreen } from "../screens/PlaylistSongsScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { BookmarkScreen } from "../screens/BookmarkScreen";
import { NewsScreen } from "../screens/NewsScreen";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tab" component={MyTabs} />
      <Stack.Screen
        name="Track"
        component={TrackScreen}
        options={{
          presentation: "transparentModal",
        }}
      />
      <Stack.Screen
        name="book"
        component={BookmarkScreen}
        options={{
          presentation: "transparentModal",
          headerMode: "none",
          cardStyle: {
            backgroundColor: "transparent",
            opacity: 0.99,
          },
        }}
      />
      <Stack.Screen name="Chart" component={ChartScreen} />
      <Stack.Screen name="Album" component={AlbumScreen} />
      <Stack.Screen name="PlaylistSongs" component={PlaylistSongsScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={{
          animation: "none",
        }}
      />
    </Stack.Navigator>
  );
};
