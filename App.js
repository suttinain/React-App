import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert, Button, Image } from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
      <Image source={require('./doge.png')}/>
      <Text style={styles.title}>DogeCoin</Text>
      <TextInput
        autoCapitalize="none"
        placeholder="Username"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={
        (text) => setEmail(text)
      }
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Password"
        style={styles.input}
        keyboardType="default"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Log in"
        onPress={() => console.log(email, password)}
      />
      <Button
        color = "green"
        title="Register"
        onPress={() => console.log(email, password)}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: "30%",
    marginTop: "0%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#057dfe",
    paddingBottom: 5,
    fontSize: 20,
    margin: 10
  },
  title:{
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 30,
    fontSize: 40,
    margin: 10
  }
});
export default App;
