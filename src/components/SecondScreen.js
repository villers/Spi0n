import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D690CB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 30,
  },
  spacer: {
    marginTop: 20,
    alignSelf: 'stretch',
  },
});

const SecondScreen = ({ item }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{item.ID}</Text>
  </View>
);

SecondScreen.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default SecondScreen;
