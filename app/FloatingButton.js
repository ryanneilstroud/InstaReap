import React, { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionSheet from './ActionSheet';


const FloatingButton = ({ callback }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const updateText = (title, body) => {
    callback(title, body);
    setModalVisible(false);
  };

  const clickHandler = () => {
    setModalVisible(true);
  };
  
  return (
    <SafeAreaView>
    <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
        <ActionSheet
          title={null}
          body={null}
          onSubmit={updateText} 
          modalVisible={modalVisible}
          isEditing={false}></ActionSheet>
    </SafeAreaView>
  )
  }

  const styles = StyleSheet.create({
    touchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },
    floatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
    }
  });

  export default FloatingButton