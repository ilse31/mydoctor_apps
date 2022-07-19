import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input} from '../../components';

const Register = () => {
  return (
    <View style={styles.page}>
      <Header titleHeader={'Register'} />
      <View style={styles.content}>
        <Input label={'Fullname'} />
        <Gap height={24} />
        <Input label={'Pekerjaan'} />
        <Gap height={24} />
        <Input label={'Email Address'} />
        <Gap height={24} />
        <Input label={'Password'} />
        <Gap height={24} />
        <Button title={'Register'} />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
    flex: 1,
  },
});
