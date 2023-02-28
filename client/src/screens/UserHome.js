import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const posts = [
  {
    id: "1",
    title: "New Update Released!",
    image: require("../../assets/images/post.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel justo eget augue pulvinar sodales a sed libero.",
  },
  {
    id: "2",
    title: "Summer Sale is Here!",
    image: require("../../assets/images/post.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel justo eget augue pulvinar sodales a sed libero.",
  },
  {
    id: "3",
    title: "Introducing Our New Product",
    image: require("../../assets/images/post.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel justo eget augue pulvinar sodales a sed libero.",
  },
];

const screenWidth = Dimensions.get("window").width;

const UserHome = () => {
  const renderPost = ({ item }) => {
    return (
      <View style={styles.postContainer}>
        <Image source={item.image} style={styles.postImage} />
        <View style={styles.postTextContainer}>
          <Text style={styles.postTitle}>{item.title}</Text>
          <Text style={styles.postDescription}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>News</Text>
      <FlatList
        data={posts}
        renderItem={renderPost}
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
  postContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    overflow: "hidden",
  },
  postImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  postTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  postDescription: {
    color: "#777",
  },
  absenceContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  absenceHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  chartContainer: {
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default UserHome;
