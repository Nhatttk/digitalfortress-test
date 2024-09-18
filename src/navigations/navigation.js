import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
// import GamePlayScreen from "../screens/GamePlayScreen";
import ResultLost from "../screens/ResultLost";
import ResultWin from "../screens/ResultWin";
import Game from "../screens/GamePlayScreen";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResultLost"
        component={ResultLost}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResultWin"
        component={ResultWin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
