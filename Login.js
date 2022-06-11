import React, {useState} from 'react'
import { SafeAreaView, Text, StyleSheet, Button, StatusBar, TextInput }
    from 'react-native'
import {openDatabase} from 'react-native-sqlite-storage';
const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>DogeCoin</Text>
            <TextInput
                autoCapitalize="none"
                placeholder="Username"
                style={styles.input}
                keyboardType="default"
                value={username}
                onChangeText={
                (text) => setUsername(text)
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
                title="Register"
                onPress={
                () => navigation.navigate('Register')
            }
            />
            <Button
                title="Log in"
                onPress={() => navigation.navigate('MainPage', {paramKey: 'Null'})}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightyellow',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        borderColor: 'black'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#057dfe",
        paddingBottom: 5,
        fontSize: 15,
        margin: 10,
        padding: 15,
        textAlign: 'left',
    },
    title:{
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: 30,
        fontSize: 40,
        margin: 10,
        color: 'gold'
    },
    main:{
        borderColor: 'black',
    }
});
export default Login;
