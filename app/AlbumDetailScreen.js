import React, { useEffect, useState } from "react";
import { TouchableOpacity, Image, Dimensions, StyleSheet, FlatList, ActivityIndicator, View } from "react-native";

const AlbumDetailScreen = ({ navigation, route }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + route.params.id)
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
    renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('ImageViewer', {
            url: item.url,
            title: item.title
          })}>
            <View style={styles.itemContainer}>
                <Image style={styles.item} source={{ uri: item.thumbnailUrl }}></Image>
            </View>
        </TouchableOpacity>
    )}
    keyExtractor={item => item.id}
    numColumns={3} />
      )}
    </View>
    )
}

const size = Dimensions.get('window').width/3;
const styles = StyleSheet.create({
  itemContainer: {
    width: size,
    height: size,
  },
  item: {
    flex: 1,
    margin: 3,
  }
});


export default AlbumDetailScreen;