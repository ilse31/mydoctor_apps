import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArrowBack} from '../../assets';
import Gap from '../Gap';

const Header = ({titleHeader}) => {
  return (
    <View style={styles.container}>
      <ArrowBack />
      <Text style={styles.text}>{titleHeader}</Text>
      <Gap width={25} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    marginLeft: 8,
    textAlign: 'center',
  },
});
