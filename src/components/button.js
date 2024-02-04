import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default function Addbutton(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.press}>
        <Text style={styles.btntext}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    borderRadius: 20,
    border: "none",
  },
  btntext: {
    color: "#fff",
    fontSize: 20,
  }
});
