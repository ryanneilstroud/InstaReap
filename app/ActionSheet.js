import React from "react";
import { Modal, TextInput, Pressable, StyleSheet, Text, View } from "react-native";
import CustomAlert from "./CustomAlert";
import { isInvalid } from "./Validation";

const ActionSheet = ({ isEditing, title, body, modalVisible, onSubmit }) => {
    const [bodyValue, onChangeBody] = React.useState(body);
    const [titleValue, onChangeTitle] = React.useState(title);

    const fieldValidation = (newTitle, newBody) => {
      if (isInvalid(newTitle) || isInvalid(newBody)) {
        CustomAlert("Invalid Inputs", "Please fill in both fields.");
      } else {
        onSubmit(newTitle, newBody);
      }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>{isEditing ? "Edit" : "New"}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Your Title"
                        onChangeText={onChangeTitle}
                        value={titleValue}
                    />
                    <TextInput
                        multiline
                        style={styles.input}
                        placeholder="Your Message"
                        onChangeText={onChangeBody}
                        value={bodyValue}
                    />
                    <Pressable
                        style={styles.button}
                        onPress={() => fieldValidation(titleValue, bodyValue)}>
                        <Text style={styles.textStyle}>Confirm</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      backgroundColor: "#FF004A"
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    input: {
        minWidth: 150,
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    title: {
        fontWeight: "bold",
        paddingBottom: 10
    },
  });

export default ActionSheet;