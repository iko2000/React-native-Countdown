import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { colors } from "./src/utiles/colors";
import Focus from "./src/features/focus";
import { useState } from "react";
import Countdown from "./src/components/countdown";
import { useStorgecomponent } from './src/store/store';


export default function App() {
  const focusedSubject = useStorgecomponent((state) => state.currentTopic);

  return (
    <SafeAreaView style={styles.container}>
     {focusedSubject ? <Countdown/> : <Focus/> }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
  },
});
