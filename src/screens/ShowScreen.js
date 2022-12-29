import { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const postId = navigation.getParam("id");
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === postId);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: navigation.getParam("id") })}>
          <FontAwesome style={styles.icon} name="pencil" size={25} />
        </TouchableOpacity>
      );
    },
  };
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
});

export default ShowScreen;
