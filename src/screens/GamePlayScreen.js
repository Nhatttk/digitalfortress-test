import React, { useState } from "react";
import { View, StyleSheet, Button, Dimensions, Animated, Image, TouchableOpacity, Text, ImageBackground } from "react-native";
import Cup from "./../components/cup"; 
const { width, height } = Dimensions.get("window");

const images = [
  require("../../assets/plastic-cup.png"),
  require("../../assets/plastic-cup.png"),
  require("../../assets/plastic-cup.png"),
];

const Game = () => {
  const [cups, setCups] = useState(images);
  const [ballIndex, setBallIndex] = useState(0);

  const animation1 = new Animated.Value(0); // Cốc thứ 1
  const animation3 = new Animated.Value(0); // Cốc thứ 3

  const [showOverlay, setShowOverlay] = useState(false);
  const [winStatus, setWinStatus] = useState();
  const [active, setActive] = useState(false);

  const shuffleCups = () => {
    setShowOverlay(false);
    setActive(false);

    const newBallIndex = Math.floor(Math.random() * cups.length);
    setBallIndex(newBallIndex);

  };
  const randomCup = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(animation1, {
          toValue: 135, // Di chuyển cốc thứ 1 qua bên phải 135 đơn vị
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation3, {
          toValue: -135, // Di chuyển cốc thứ 3 qua bên trái 30 đơn vị
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(animation1, {
          toValue: 0, // Trở lại vị trí ban đầu
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation3, {
          toValue: 0, // Trở lại vị trí ban đầu
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  const animatedStyle = (index) => {
    const translateX = index === 0 ? animation1 : index === 2 ? animation3 : 0;
    return {
      transform: [{ translateX }],
    };
  };

  const handleCupPress = (index) => {
    if (index === ballIndex) {
      setActive(true);
      setWinStatus(true);
      setShowOverlay(true);
    } else {
      setActive(true);
      setWinStatus(false);
      setShowOverlay(true);
    }
  };

  return (
    <ImageBackground
      source={require("./../../assets/background.png")}
      style={styles.container}
    >
      <View style={styles.row}>
        {cups.map((source, index) => (
          <Animated.View key={index} style={[styles.cup, animatedStyle(index)]}>
            <Cup
              isActive={active && index === ballIndex}
              onPress={() => handleCupPress(index)}
              source={source}
            />
          </Animated.View>
        ))}
      </View>
      {showOverlay ? (
        <View style={styles.overlay}>
          <Image
            source={
              winStatus === true
                ? require("../../assets/you-win.png")
                : require("../../assets/you-lose.png")
            }
            style={styles.overlayImage}
          />
          <TouchableOpacity style={styles.restartButton} onPress={shuffleCups}>
            <Image
              source={
                require("../../assets/tap-to-restart.png")
              }
              style={styles.overlayImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.btn_random}
          title="Random"
          onPress={randomCup}
        >
          <Text>Random</Text>
        </TouchableOpacity>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 150
  },
  cup: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_random: {
    backgroundColor: "#007BFF", 
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 50
  },

});

export default Game;
