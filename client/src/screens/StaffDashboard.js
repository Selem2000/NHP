import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const apartmentData = [
  {
    id: 1,
    title: "Apartment 1",
    iconName: "home",
    employees: [
      { id: 1, name: "Employee 1", role: "Role 1" },
      { id: 2, name: "Employee 2", role: "Role 2" },
      { id: 3, name: "Employee 3", role: "Role 3" },
    ],
  },
  {
    id: 2,
    title: "Apartment 2",
    iconName: "home",
    employees: [
      { id: 1, name: "Employee 1", role: "Role 1" },
      { id: 2, name: "Employee 2", role: "Role 2" },
    ],
  },
  {
    id: 3,
    title: "Apartment 3",
    iconName: "home",
    employees: [
      { id: 1, name: "Employee 1", role: "Role 1" },
      { id: 2, name: "Employee 2", role: "Role 2" },
      { id: 3, name: "Employee 3", role: "Role 3" },
      { id: 4, name: "Employee 4", role: "Role 4" },
    ],
  },
];

const StaffDashboard = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.employeeRow}
      onPress={() => console.log(`Selected employee: ${item.name}`)}
    >
      <View style={styles.employeeCell}>
        <Text style={styles.employeeName}>{item.name}</Text>
      </View>
      <View style={styles.employeeCell}>
        <Text style={styles.employeeRole}>{item.role}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderApartmentButton = ({ item }) => (
    <TouchableOpacity
      style={styles.apartmentButton}
      onPress={() => {
        setSelectedApartment(item);
        setModalVisible(true);
      }}
    >
      <View style={styles.apartmentIcon}>
        <Ionicons name={item.iconName} size={32} color="white" />
      </View>
      <Text style={styles.apartmentTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={apartmentData}
        renderItem={renderApartmentButton}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.apartmentButtonContainer}
      />

      {selectedApartment && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={32} color="black" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>{selectedApartment.title}</Text>
            </View>
            <FlatList
              data={selectedApartment.employees}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  apartmentButtonContainer: {
    justifyContent: "space-between",
  },
  apartmentButton: {
    backgroundColor: "#4a69bb",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: "47%",
    alignItems: "center",
  },
  apartmentIcon: {
    backgroundColor: "grey",
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
  },
  apartmentTitle: {
    color: "white",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  employeeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  employeeCell: {
    width: "50%",
  },
  employeeName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  employeeRole: {
    fontSize: 16,
    color: "grey",
  },
});
export default StaffDashboard;
