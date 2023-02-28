import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Speedometer from "react-native-speedometer-chart";
import { LinearGradient } from "expo-linear-gradient";

const QualityDashboard = () => {
  const [drt, setDrt] = useState(70);

  const handleDrtChange = (value) => {
    setDrt(value);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#2E86C1", "#2980B9"]} style={styles.background}>
        <Text style={styles.title}>User Quality Dashboard</Text>
        <Text style={styles.userName}>User Name: John Doe</Text>
        <Speedometer
          value={drt}
          totalValue={100}
          size={250}
          innerCircleStyle={styles.innerCircle}
          outerCircleStyle={styles.outerCircle}
          showIndicator
          showLabels
          labelStyle={styles.label}
          showText
          text={drt}
          textstyle={styles.speedometerValue}
          needleColor="white"
          needleWidth={3}
          onValueChange={handleDrtChange}
          halfCircleColorStart="#2E86C1"
          halfCircleColorEnd="#2980B9"
          halfCircleGradient
        />
      </LinearGradient>
      <View style={styles.metricsContainer}>
        <Text style={styles.metrics}>DRT: {drt}</Text>
        <Text style={styles.metrics}>Total Bugs Found: 20</Text>
        <Text style={styles.metrics}>Bugs Resolved: 18</Text>
        <Text style={styles.metrics}>Bugs Pending: 2</Text>
        <Text style={styles.metrics}>Defect Density: 0.05%</Text>
        <Text style={styles.metrics}>Defect Leakage: 10%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 50,
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 30,
  },
  innerCircle: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  outerCircle: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  label: {
    color: "#fff",
  },
  metricsContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: -20,
    marginBottom: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  metrics: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  speedometerValue: {
    color: "#AAA",
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default QualityDashboard;
