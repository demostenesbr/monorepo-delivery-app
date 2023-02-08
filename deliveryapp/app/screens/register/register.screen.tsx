import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';

export const RegisterScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Appbar>
          <Appbar.BackAction />
          <Appbar.Content title="Register" />
        </Appbar>
        <TextInput label="Name" />
        <TextInput label="Email" keyboardType="email-address" />
      </ScrollView>
    </SafeAreaView>
  );
};
