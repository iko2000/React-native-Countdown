import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { useStorgecomponent } from "../store/store";

const Calculator = function (seconds) {
  if (seconds / 6 > 1) return 1;
};

export default function Countdown() {
  const setcurrentTopic = useStorgecomponent((state) => state.setcurrentTopic);
  const currentTopic = useStorgecomponent((state) => state.currentTopic);
  const [timerCount, setTimer] = useState(6);
  const [minute, setMinute] = useState(5);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        if (lastTimerCount == 1) {
          alert("Complted");
          setcurrentTopic("");
        } else {
          lastTimerCount <= 1 && clearInterval(interval);
          return lastTimerCount - 1;
        }
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, []);

  const remainingMinutes = Math.floor(timerCount / 60);
  const remainingSeconds = timerCount % 60;

  return (
    <View style={styles.container}>
      <View style={styles.smallcontainers}>
        <Text style={styles.text}>You are focused on: {currentTopic}</Text>
        
        
        <View style={styles.countcontainer}>
          <View style={styles.countbox}>
            <Text style={styles.countnum}>{remainingMinutes}</Text>
            <Text style={styles.counttxt}>Minutes</Text>

            </View>
          <View  style={styles.countbox}>
            <Text style={styles.countnum}>{remainingSeconds}</Text>
            <Text style={styles.counttxt}>Second</Text>

            </View>
        </View>
      </View>
      <View style={styles.smallcontainers}>
      <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setTimer(300);
            }}
          >
            <Text style={styles.btntxt}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setTimer(600);
            }}
          >
            <Text style={styles.btntxt}>10</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setTimer(900);
            }}
          >
            <Text style={styles.btntxt}>15</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setcurrentTopic("");
            }}
          >
            <Text style={styles.btntextdone}>DONE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252250"


  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  smallcontainers: {
    width: "90%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",

  },
  buttoncontainer: {
    width: "100%",
    height: "50%",
    border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#252250",
  },
  button: {
    width: 70,
    height: 50,
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btntxt: {
    fontSize: 25,
    color: "black",
  },
  btntextdone: {
    fontSize: 25,
    color: "green",
  },
  countcontainer: {
    width: 500,
    height: 200,
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    
  }, 
  countbox : {
    width: "30%",
    height: "60%",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  countnum: {
    fontSize: 90,
    color: "red",
  },
  counttxt: {
    fontSize: 25,
    color: "green"

  }
});
