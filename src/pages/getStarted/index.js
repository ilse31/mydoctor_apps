import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {ILGetStartted, ILLogo} from '../../assets';
import {Button} from '../../components';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStartted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title={'Get Started'} />
        <View style={{height: 16}} />
        <Button type={'secondary'} title={'Sign In'} />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    marginTop: 91,
  },
});