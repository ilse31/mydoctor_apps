import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({type, title, onPresss}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPresss}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: type === 'secondary' ? 'black' : 'white',
  }),
});
