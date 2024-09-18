import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const Cup = ({ isActive, onPress, source }) => (
  <TouchableOpacity style={styles.cupContainer} onPress={onPress}>
    <View style={styles.cup}>
      <Image source={source} style={styles.image} />
      {isActive && <Text style={styles.ballText}>⚽️</Text>}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cupContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cup: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  ballText: {
    fontSize: 30,
    color: 'black',
  },
});

export default Cup;
