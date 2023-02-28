import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  DashboardScreen,
  HomeAdminScreen,
  StaffDashboardScreen,
  AbsenceGlobalScreen,
  LoginScreen,
  HomeTechScreen,
  TeamScreen,
  TimeManagementScreen,
  QualityDasshboardScreen,
  ScheduleInternchangeScreen,
  VacationScreen,
  UserAbsenceScreen,
  WelcomeScreen,
  UserHomeScreen,
  TransportScreen,
} from "./src/screens/Index";
import DrawerItems from "./src/Components/DrawerItems";
import { View } from "react-native";
import Login from "./src/screens/Login";
import Welcome from "./src/screens/Welcome";
import { createStackNavigator } from "@react-navigation/stack";
import Savoir from "./src/screens/Savoir";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        default: "Welcome",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Savoir" component={Savoir} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="Manager" component={Manager} />
    </Stack.Navigator>
  );
}

function User() {
  return (
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
      <Drawer.Screen name="Home" component={UserHomeScreen} />
      <Drawer.Screen
        name="QualityDashboard"
        component={QualityDasshboardScreen}
      />
      <Drawer.Screen
        name="ScheduleInternchange"
        component={ScheduleInternchangeScreen}
      />
      <Drawer.Screen name="Vacation" component={VacationScreen} />
      <Drawer.Screen name="UserAbsence" component={UserAbsenceScreen} />
    </Drawer.Navigator>
  );
}

function Admin() {
  return (
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
      <Drawer.Screen name="StaffDashboard" component={StaffDashboardScreen} />
      <Drawer.Screen name="AbsenceGlobal" component={AbsenceGlobalScreen} />
    </Drawer.Navigator>
  );
}

function Manager() {
  return (
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
      <Drawer.Screen name="Home" component={HomeTechScreen} />
      <Drawer.Screen name="Team" component={TeamScreen} />
      <Drawer.Screen name="Vication Request" component={TimeManagementScreen} />
      <Drawer.Screen name="Schedule Request" component={TimeManagementScreen} />
      <Drawer.Screen name="Absence Global" component={AbsenceGlobalScreen} />
      <Drawer.Screen name="Transport" component={TransportScreen} />
      <Drawer.Screen
        name="Quality Dashboard"
        component={QualityDasshboardScreen}
      />
      <Stack.Screen name="Log Out" component={MyStack} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

    // <NavigationContainer>
    //   <Drawer.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{
    //       drawerStyle: {
    //         paddingTop: 100,
    //         width: 240,
    //       },
    //     }}
    //     drawerContent={(props) => <DrawerItems {...props} />}
    //   >
    //     <Drawer.Screen name="Home" component={HomeAdminScreen} />
    //     <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    //     <Drawer.Screen name="StaffDashboard" component={StaffDashboardScreen} />
    //     <Drawer.Screen name="AbsenceGlobal" component={AbsenceGlobalScreen} />
    //     <Drawer.Screen
    //       name="QualityDashboard"
    //       component={QualityDasshboardScreen}
    //     />
    //     <Drawer.Screen
    //       name="ScheduleInternchange"
    //       component={ScheduleInternchangeScreen}
    //     />
    //     <Drawer.Screen name="Vacation" component={VacationScreen} />
    //     <Drawer.Screen name="UserAbsence" component={UserAbsenceScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}
