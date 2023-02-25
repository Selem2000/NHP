import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ChartPie from "../Components/ChartPie";

const data = [
  { title: "Revenue", value: "$5,000" },
  { title: "Orders", value: "100" },
  { title: "Customers", value: "50" },
  { title: "Products", value: "20" },
];

const dataTableData = [
  {
    month: "January",
    revenue: "$1,000",
    orders: "10",
    customers: "5",
    products: "2",
  },
  {
    month: "February",
    revenue: "$2,000",
    orders: "20",
    customers: "10",
    products: "4",
  },
  {
    month: "March",
    revenue: "$3,000",
    orders: "30",
    customers: "15",
    products: "6",
  },
];

const Dashboard = () => {
  const [filter, setFilter] = useState("revenue");

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.title}
      style={styles.gridItem}
      onPress={() => setFilter(item.title.toLowerCase())}
    >
      <Text style={styles.gridTitle}>{item.title}</Text>
      <Text style={styles.gridValue}>{item.value}</Text>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Date</Text>
      <Text style={styles.headerText}>
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </Text>
    </View>
  );

  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.month}</Text>
      <Text style={styles.cell}>{item[filter]}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <ChartPie />
      <View style={styles.gridContainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.title}
            style={styles.gridItem}
            onPress={() => setFilter(item.title.toLowerCase())}
          >
            <Text style={styles.gridTitle}>{item.title}</Text>
            <Text style={styles.gridValue}>{item.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.tableContainer}>
        {renderHeader()}
        {dataTableData.map((item) => (
          <View key={item.month} style={styles.row}>
            <Text style={styles.cell}>{item.month}</Text>
            <Text style={styles.cell}>{item[filter]}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  gridContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
  },
  gridItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  gridTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gridValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tableContainer: {
    marginTop: 20,
    marginBottom: 60,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
  },
});

export default Dashboard;
