import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ImageLoad from "./components/ImageLoad";
import MainPage from "./components/MainPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="MainPage">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="ImageLoad" component={ImageLoad} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
