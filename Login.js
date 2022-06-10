import React, {useState} from 'react'
import { SafeAreaView, Text, StyleSheet, Button, StatusBar, TextInput }
    from 'react-native'
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
                onPress={() => console.log(email, password)}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    body: {
        fontSize: 30,
    },
    form: {
        marginTop: "0%",
        backgroundColor: '#fff',
        alignItems: 'center',
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
        color: 'orange'
    }
});
export default Login;