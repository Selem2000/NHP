import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const members = [
  {
    id: "1",
    name: "John Doe",
    role: "Developer",
    email: "johndoe@example.com",
    avatar: require("../../assets/images/thumb-56.jpg"),
  },
  {
    id: "2",
    name: "Jane Doe",
    role: "Designer",
    email: "janedoe@example.com",
    avatar: require("../../assets/images/thumb-56.jpg"),
  },
  {
    id: "3",
    name: "Bob Smith",
    role: "Project Manager",
    email: "bobsmith@example.com",
    avatar: require("../../assets/images/thumb-56.jpg"),
  },
];

const Team = () => {
  const renderMember = ({ item }) => {
    return (
      <View style={styles.memberContainer}>
        <Image source={item.avatar} style={styles.memberAvatar} />
        <View style={styles.memberTextContainer}>
          <Text style={styles.memberName}>{item.name}</Text>
          <Text style={styles.memberRole}>{item.role}</Text>
          <Text style={styles.memberEmail}>{item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={members}
        renderItem={renderMember}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  memberContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7FAFC",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  memberAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  memberTextContainer: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D3748",
  },
  memberRole: {
    fontSize: 16,
    color: "#718096",
    marginBottom: 5,
  },
  memberEmail: {
    fontSize: 14,
    color: "#718096",
  },
});

export default Team;
