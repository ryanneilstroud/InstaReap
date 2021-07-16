import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const ImageViewer = ({ route }) => {
    console.log(route);

    const image = { uri: route.params.url };
    const title = route.params.title

    return (
        <View style={ styles.container }>
            <ImageBackground source={image} style={styles.backgroundImage}>
                <View style={ styles.loginForm }>
                    <Text>{title}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    loginForm: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
});

export default ImageViewer;