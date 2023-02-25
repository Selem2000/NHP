import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import logo from "../../assets/images/logo.png";
import { SafeAreaView } from "react-navigation";

const Login = () => {
  return (
    <View style={styles.root}>
      <Image source={logo} style={styles.logo} resizeMode="stretch" />
      <View style={styles.blueBox}>
        <TextInput placeholder="Email" style={styles.inputLogin} />
        <TextInput placeholder="Password" style={styles.inputLogin} />
        <TouchableOpacity>
          <Text style={styles.btnLog}>LogIn</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bS}></View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: { alignItems: "center", padding: 20 },
  inputLogin: {
    width: "100%",
    padding: 30,
    color: "#fff",
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    borderStyle: "solid",
    letterSpacing: 1,
    fontSize: 20,
    outlineStyle: "none",
  },
  btnLog: {
    letterSpacing: 1,
    fontSize: 20,
    color: "#000",
    backgroundColor: "#fff",
    padding: 20,
    width: "300px",
    textAlign: "center",
    borderRadius: "15px",
    marginTop: 10,
  },
  blueBox: {
    width: 350,
    height: 370,
    backgroundColor: "#014EA2",
    borderRadius: "15px",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
  },
  logo: { width: 400, height: 370 },
  bS: {
    width: 150,
    height: 10,
    backgroundColor: "#014EA2",
    bottom: -59,
    position: "absolute",
    borderRadius: "100px",
  },
});
