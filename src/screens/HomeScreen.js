import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Game")}
      >
        <ImageBackground
          source={require("../../assets/home-background.png")}
          style={styles.background}
        >
          <View style={styles.content}>
            <Image source={require("../../assets/logo.png")} />
            <Image source={require("../../assets/tap-to-play.png")} />
          </View>
        </ImageBackground>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    gap: 35
  }
});
