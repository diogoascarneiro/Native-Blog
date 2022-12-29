import { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const postId = navigation.getParam("id");
  const { state, editBlogPost } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === postId);
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit the post</Text>
      <Text style={styles.label}>Edit Title: </Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
      <Button
        title="Edit post"
        onPress={() =>
          editBlogPost(postId, title, content, () => {
            navigation.pop();
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

export default EditScreen;
