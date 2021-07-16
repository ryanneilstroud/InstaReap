import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, FlatList, Text, View } from "react-native";

const PostHeader = ( params ) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle} >{params.params.title}</Text>
        <Text style={{ fontSize: 24 }}>{params.params.body}</Text>
      </View>
    )
  }

const PostDetailScreen = ({ route }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/comments?postId=' + route.params.item.id)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => CustomAlert("Error", error))
        .finally(() => setLoading(false));
    }, []);

    return (
    <View>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.card} >
              <Text style={styles.title}>{item.email}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
          ListHeaderComponent={
            <PostHeader params={route.params.item}></PostHeader>
          }
          ListEmptyComponent={
            <Text>There's no comments.</Text>
          }
        />
      )}
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
    header: {
        backgroundColor: "white",
        padding: 25,
        marginBottom: 10
    },
    headerTitle: {
        fontWeight: "bold",
        fontSize: 32
    }
  });

export default PostDetailScreen;