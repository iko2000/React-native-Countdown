import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { TextInput } from "react-native-paper";
import Addbutton from "../components/button";
import { useStorgecomponent } from "../store/store";

export default function Focus() {
  const [subject, setSubject] = useState(null);

  const setcurrentTopic = useStorgecomponent((state) => state.setcurrentTopic);
  const Historylist = useStorgecomponent((state) => state.topicsHistory);
  const addHistorylist = useStorgecomponent((state) => state.setHistory);

  console.log("History items", Historylist);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={setSubject} label={"Focus Item"} />
        {/* <Text>{subject}</Text> */}
        <Addbutton
          btnstyle={styles.btnstyle}
          press={() => {
            setcurrentTopic(subject);
            addHistorylist(subject);
          }}
        />
      </View>
      <View style={styles.historycont}>
        <Text style={styles.listofItems}> Focus History </Text>
        <View style={styles.listcontainer}>
        {Historylist.map((item, index) => (
    <Text style={styles.listcontainertxt} key={index} onPress={() => {setcurrentTopic(item)}}>{item}</Text>
      ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#fff",
  },
  inputContainer: {
    flex: 0.4,
    justifyContent: "top",
    padding: 50,
  },
  btnstyle: {
    color: "pink",
  },
  historycont: {
    border: "1px solid black",
    wdith: 60,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  listcontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
  },
  listcontainertxt: {
    fontSize: 30,
    color: "white",
    listSttyleType: "circle",
  },
  listofItems: {
    fontSize: 25,
    color: "purple",
  }
});
