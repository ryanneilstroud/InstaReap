import { Alert } from "react-native";

const CustomAlert = (title, message) => {
     Alert.alert(
        title,
        message,
        [ { text: "OK", onPress: () => console.log("OK Pressed") } ]
    );
}

export default CustomAlert;