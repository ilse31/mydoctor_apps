import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label={'Email Address'} />
      <Gap height={10} />
      <Input label={'Password'} />
      <Link title="Forgot Password ?" size={12} />
      <Gap height={40} />
      <Button title={'Sign In'} />
      <Gap height={30} />
      <Link title="Create New Account" align="center" size={16} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    color: '#112340',
    fontFamily: 'Nunito-SemiBold',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
