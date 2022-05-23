import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {ILGetStartted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStartted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title={'Get Started'}
          onPresss={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type={'secondary'}
          title={'Sign In'}
          onPresss={() => navigation.navigate('SignIn')}
        />
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
    fontFamily: 'Nunito-SemiBold',
    fontSize: 28,
    color: 'white',
    marginTop: 91,
  },
});
