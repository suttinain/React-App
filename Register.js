import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, Button, TextInput }
    from 'react-native';
const Register = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                autoCapitalize="none"
                placeholder="Name"
                style={styles.input}
                keyboardType="default"
                value={name}
                onChangeText={
                (text) => setName(text)
            }
            />
            <TextInput
                autoCapitalize="none"
                placeholder="Email"
                style={styles.input}
                keyboardType="email-address"
                value={email}
                onChangeText={
                (text) => setEmail(text)
            }
            />
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
                onChangeText={
                    (text)=> setPassword(text)
                }
            />
            <Button
                title="Done"
                onPress={
                () => navigation.navigate('MainPage', {
                    paramKey: name,
                })
                }
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
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
    }
});
export default Register;
