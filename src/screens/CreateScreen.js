import { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a new post</Text>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
      <Button
        title="Add new post"
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    fontSize: 30,
    marginVertical: 30,
    textAlign: "center",
  },
  label: {
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 30,
    padding: 15,
  },
});

export default CreateScreen;
