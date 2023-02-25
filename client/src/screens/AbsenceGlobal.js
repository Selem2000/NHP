import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

const AbsenceGlobal = () => {
  const absenceData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        data: [3, 2, 1, 4, 5],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // red
        strokeWidth: 2, // optional
      },
    ],
  };

  const tableData = [
    { employee: "John", absences: 3 },
    { employee: "Sarah", absences: 2 },
    { employee: "Bob", absences: 4 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.column}>{item.employee}</Text>
      <Text style={[styles.column, styles.rightAlign]}>{item.absences}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <LineChart
          data={absenceData}
          width={350}
          height={200}
          chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
        />
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.row}>
          <Text style={[styles.column, styles.header]}>Employee</Text>
          <Text style={[styles.column, styles.header, styles.rightAlign]}>
            Absences
          </Text>
        </View>
        <FlatList
          data={tableData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
  chartContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  tableContainer: {
    marginTop: 40,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  column: {
    flex: 1,
  },
  rightAlign: {
    textAlign: "right",
  },
  header: {
    fontWeight: "bold",
  },
  list: {
    marginTop: 8,
  },
});

export default AbsenceGlobal;
