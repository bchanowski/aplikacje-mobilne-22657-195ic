import React from 'react';
import {Text, StyleSheet} from 'react-native';

const MyText = (props) => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#F5F5F5',
    fontSize: 18,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
});

export default MyText;
