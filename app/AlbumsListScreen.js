import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Text, View } from "react-native";

const AlbumsListScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/albums')
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
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AlbumDetailScreen', {
              id: item.id
            })}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
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
  }
});

export default AlbumsListScreen;