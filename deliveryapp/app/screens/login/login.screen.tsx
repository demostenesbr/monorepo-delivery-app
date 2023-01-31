import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from './login.style';

export const LoginScreen = () => {
  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Card.Title title="Delivery App" titleStyle={loginStyle.cardTitle} />
          <Card.Content>
            <TextInput label="Email" keyboardType="email-address" />
            <TextInput label="Password" secureTextEntry={true} />
            <Button uppercase={false} style={loginStyle.cardButton}>Forgot Email / Password</Button>
            <Button mode="contained" style={loginStyle.cardButton}>Login</Button>
            <Button  style={loginStyle.cardButton}>Register</Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};
