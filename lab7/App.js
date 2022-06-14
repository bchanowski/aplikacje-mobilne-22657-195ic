import "react-native-gesture-handler";
import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./pages/HomeScreen";
import RegisterUser from "./pages/RegisterUser";
import UpdateUser from "./pages/UpdateUser";
import ViewUser from "./pages/ViewUser";
import ViewAllUser from "./pages/ViewAllUser";
import DeleteUser from "./pages/DeleteUser";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ViewUser" component={ViewUser} />
        <Stack.Screen name="ViewAllUser" component={ViewAllUser} />
        <Stack.Screen name="UpdateUser" component={UpdateUser} />
        <Stack.Screen name="RegisterUser" component={RegisterUser} />
        <Stack.Screen name="DeleteUser" component={DeleteUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
