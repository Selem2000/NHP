import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DataTable } from "react-native-paper";
import ChartPie from "../Components/ChartPie";

const data = [
  { title: "Revenue", value: "$5,000" },
  { title: "Orders", value: "100" },
  { title: "Customers", value: "50" },
  { title: "Products", value: "20" },
];

const Dashboard = () => {
  const [filter, setFilter] = useState("Revenue");

  return (
    <View style={styles.container}>
      <ChartPie />
      <View style={styles.gridContainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.title}
            style={styles.gridItem}
            onPress={() => setFilter(item.title)}
          >
            <Text style={styles.gridTitle}>{item.title}</Text>
            <Text style={styles.gridValue}>{item.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <DataTable style={{ marginTop: 40 }}>
        <DataTable.Header>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title numeric>{filter}</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>January</DataTable.Cell>
          <DataTable.Cell numeric>$1,000</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>February</DataTable.Cell>
          <DataTable.Cell numeric>$2,000</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>March</DataTable.Cell>
          <DataTable.Cell numeric>$3,000</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  gridContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 20,
    alignItems: "center",
  },
  gridItem: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
    marginTop: 10,
    width: "60%",
  },
  gridTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  gridValue: {
    fontSize: 14,
  },
});

export default Dashboard;
