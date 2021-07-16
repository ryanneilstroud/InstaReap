import React, { useEffect, useState } from "react";
import { Button, TouchableOpacity, ActivityIndicator, StyleSheet, FlatList, Text, View, StatusBar } from "react-native";
import FloatingButton from "./FloatingButton";
import ActionSheet from "./ActionSheet";
import { BAD_INDEX, USER_ID, isCurrentUser } from "./Validation";


const Cell = ({ title, body }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{body}</Text>
    </View>
  )
}

var selectedIndex = BAD_INDEX;

const PostsListsScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  var [bodyText] = React.useState("");
  var [titleText] = React.useState("");

  const createPost = (title, body) => {
    const post = {
      "userId" : USER_ID,
      "id"  : Math.floor(Math.random() * 1000),
      "title": title,
      "body" : body
    }
    data.unshift(post);
  };

  const editPost = (title, body) => {
    if (selectedIndex == BAD_INDEX) {
      CustomAlert("Invalid Index", "This item does not exist.")
    } else {
      data[selectedIndex].title = title;
      data[selectedIndex].body = body;
    }
    setModalVisible(false);
  };

  const clickHandler = (item, index) => {
    selectedIndex = index;
    titleText = item.title;
    bodyText = item.body;

    setModalVisible(true);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => CustomAlert("Error", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => navigation.navigate('PostDetail', {
              item: item
            })}>
            { !isCurrentUser(item.userId) ? <Cell title={item.title} body={item.body}></Cell> :
              <View style={{ flexDirection: 'row'}}>
                <Cell title={item.title} body={item.body}></Cell> 
                <Button onPress={() => clickHandler(item, index)} title="Edit"></Button>
              </View>
            }
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text>There's no data here.</Text>
          }
        />
      )}
      <ActionSheet 
              onSubmit={editPost} 
              modalVisible={modalVisible}
              isEditing={true}
              title={titleText}
              body={bodyText}></ActionSheet>
      <FloatingButton callback={createPost}></FloatingButton>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    borderRadius: 20,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 10
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#f8f8ff"
  }
});

export default PostsListsScreen;