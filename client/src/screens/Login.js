import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import React from "react";
import logo from "../../assets/images/logo.png";

const Login = () => {
  return (
    <View style={styles.root}>
      <Image source={logo} style={styles.logo} resizeMode="stretch" />
      <View style={styles.blueBox}>
        <TextInput placeholder="Email" style={styles.inputLogin} />
        <TextInput
          secureTextEntry="true"
          placeholder="Password"
          style={styles.inputLogin}
        />
        <Pressable>
          <Text style={styles.btnLog}>LogIn</Text>
        </Pressable>
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
    borderBottomWidth: "2px",
    borderStyle: "solid",
    fontFamily: "Inter",
    letterSpacing: "1px",
    fontSize: "18px",
    outlineStyle: "none",
  },
  btnLog: {
    fontFamily: "Inter",
    letterSpacing: "1px",
    fontSize: "18px",
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
  logo: { width: "400px", height: "370px" },
  bS: {
    width: 150,
    height: 10,
    backgroundColor: "#014EA2",
    bottom: -59,
    position: "absolute",
    borderRadius: "100px",
  },
});
