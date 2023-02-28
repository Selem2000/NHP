import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { DrawerItemList } from "@react-navigation/drawer";

const DrawerItem = ({ label, iconName, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
    <Ionicons name={"log-out"} size={50} color="#71839B" />
  </TouchableOpacity>
);

const DrawerItems = (props) => {
  const { navigation } = props;

  const handleLogOut = () => {
    // perform log out actions here
    // ...
    navigation.navigate("Welcome"); // navigate back to stack screen after log out
  };
  return (
    <View style={styles.drawerContent}>
      <DrawerItemList {...props} />
      <DrawerItem style={styles.login} label="Log Out" onPress={handleLogOut} />
      {/* <DrawerItem
        label="Home"
        iconName="ios-home"
        onPress={() => navigation.navigate("Home")}
      />
      <DrawerItem
        label="Dashboard"
        iconName="bar-chart"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <DrawerItem
        label="Staff"
        iconName="people"
        onPress={() => navigation.navigate("StaffDashboard")}
      /> */}
      {/* <DrawerItem
        label="Staff"
        iconName="people"
        onPress={() => navigation.navigate("Team")}
      /> */}
      {/* <DrawerItem
        label="Time Management"
        iconName="time"
        onPress={() => navigation.navigate("AbsenceGlobal")}
      />
      <DrawerItem
        label="quality"
        iconName="time"
        onPress={() => navigation.navigate("QualityDashboard")}
      />
      <DrawerItem
        label="Internchange"
        iconName="time"
        onPress={() => navigation.navigate("ScheduleInternchange")}
      />
      <DrawerItem
        label="Vacation"
        iconName="time"
        onPress={() => navigation.navigate("Vacation")}
      />
      <DrawerItem
        label="Absence"
        iconName="time"
        onPress={() => navigation.navigate("UserAbsence")}
      /> */}
      {/* <DrawerItem
        label="Time Management"
        iconName="time"
        onPress={() => navigation.navigate("TimeManagement")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    padding: 20,
    flex: 1,
    position: "relative",
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 10,
    marginTop: 250,
    marginLeft: 50,
  },
  drawerItemText: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "500",
    color: "#324054",
    display: "flex",
    alignItems: "flex-end",
  },
  login: {
    position: "absolute",
    bottom: 0,
    top: 500,
  },
});

export default DrawerItems;
