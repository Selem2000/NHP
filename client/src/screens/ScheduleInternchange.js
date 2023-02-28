import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button, Card } from "react-native-elements";
import moment from "moment";

const appointments = [
  { id: 1, employer: "ABC Company", time: "2022-03-01 09:00:00" },
  { id: 2, employer: "XYZ Corporation", time: "2022-03-02 14:00:00" },
  { id: 3, employer: "123 Industries", time: "2022-03-03 10:30:00" },
  { id: 4, employer: "456 Enterprises", time: "2022-03-04 13:15:00" },
];

const ScheduleInterchange = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleSelectAppointment = (appointment) => {
    if (selectedAppointment?.id === appointment.id) {
      setSelectedAppointment(null);
    } else {
      setSelectedAppointment(appointment);
    }
  };

  const handleConfirmAppointment = () => {
    // Add logic here to confirm the appointment change
    console.log("Appointment confirmed:", selectedAppointment);
  };

  const isAppointmentSelected = (appointment) => {
    return selectedAppointment?.id === appointment.id;
  };

  const getSelectButtonText = (appointment) => {
    return isAppointmentSelected(appointment) ? "Unselect" : "Select";
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h4 style={styles.title}>
        Schedule Interchange
      </Text>
      <View style={styles.appointmentsContainer}>
        {appointments.map((appointment) => (
          <Card key={appointment.id} containerStyle={styles.appointment}>
            <Text h4 style={styles.employerName}>
              {appointment.employer}
            </Text>
            <Text style={styles.time}>
              {moment(appointment.time).format("MMMM Do YYYY, h:mm a")}
            </Text>
            <Button
              title={getSelectButtonText(appointment)}
              onPress={() => handleSelectAppointment(appointment)}
              buttonStyle={styles.selectButton}
              titleStyle={styles.selectButtonText}
            />
          </Card>
        ))}
      </View>
      {selectedAppointment && (
        <View style={styles.confirmation}>
          <Text h4 style={styles.confirmationTitle}>
            Confirm Appointment Change
          </Text>
          <Text style={styles.time}>
            {moment(selectedAppointment.time).format("MMMM Do YYYY, h:mm a")}
          </Text>
          <Button
            title="Confirm"
            onPress={handleConfirmAppointment}
            buttonStyle={styles.confirmButton}
            titleStyle={styles.confirmButtonText}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  appointmentsContainer: {
    width: "100%",
    marginBottom: 20,
  },
  appointment: {
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  employerName: {
    marginBottom: 5,
  },
  time: {
    color: "#777",
    marginBottom: 10,
  },
  selectButton: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    marginTop: 10,
  },
  selectButtonText: {
    fontWeight: "bold",
  },
  confirmation: {
    width: "100%",
    padding: 50,
    borderWidth: 1,

    borderColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
  },
  confirmationTitle: {
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: "#4CD964",
    borderRadius: 5,
    marginTop: 10,
  },
  confirmButtonText: {
    fontWeight: "bold",
  },
});

export default ScheduleInterchange;
