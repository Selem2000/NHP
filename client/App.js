import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  DashboardScreen,
  HomeAdminScreen,
  LoginScreen,
} from "./src/screens/Index";
import DrawerItems from "./src/Components/DrawerItems";
import Login from "./src/screens/Login";
import { View } from "react-native";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <View>
    //   <Login />
    // </View>
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            paddingTop: 100,
            width: 240,
          },
        }}
        drawerContent={(props) => <DrawerItems {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeAdminScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
