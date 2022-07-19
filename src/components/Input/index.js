import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({label, children}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
      {children}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
    fontFamily: 'Nunito-Regular',
  },
});
