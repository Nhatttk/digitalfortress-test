import React from "react";
import { View, StyleSheet, Image } from "react-native";

const Ball = ({ position }) => (
  <View style={[styles.ball, { top: position.top, left: position.left }]}>
    <Image source={require("../../assets/ball.png")} style={styles.ballImage} />
  </View>
);

const styles = StyleSheet.create({
  ball: {
    position: "absolute",
  },
  ballImage: {
    width: 30, // Thay đổi kích thước hình ảnh theo nhu cầu
    height: 30,
  },
});

export default Ball;
