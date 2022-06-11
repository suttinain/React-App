import React, {useState} from 'react'
import { SafeAreaView, Text, StyleSheet, Button, StatusBar, TextInput, View }
    from 'react-native'
const MainPage = ({route}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.wel}>Welcome {route.params.paramKey}!</Text>
            <View
            style={{
                flexDirection: "row",
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                padding: 20,
            }}
            >
            <View style={{ backgroundColor: "powderblue", width: 300, height: 300, flex: 0.4, justifyContent: 'center' }}>
                <Text style={styles.s1}>Profile</Text>
            </View>
            <View style={{ backgroundColor: "lightgreen", width: 300, height: 300, flex: 0.4, justifyContent: 'center'  }}>
                <Text style={styles.s1}>Search for Recipes</Text>
            </View>
            </View>
            <View
            style={{
                flexDirection: "row",
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                padding: 20,
            }}
            >
            <View style={{ backgroundColor: "lightgreen", width: 300, height: 300, flex: 0.4, justifyContent: 'center' }}>
                <Text style={styles.s1}>My Recipes</Text>
            </View>
            <View style={{ backgroundColor: "powderblue", width: 300, height: 300, flex: 0.4, justifyContent: 'center'  }}>
                <Text style={styles.s1}>Settings</Text>
            </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        //alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: StatusBar.currentHeight,
    },
    wel:{
        fontSize: 20,
        color: "grey",
        alignSelf: 'flex-start',
        padding: 10,
        fontWeight: 'bold',
    },
    s1:{
        fontSize: 20,
        color: "yellow",
        alignSelf: 'center',
        padding: 10,
        fontWeight: 'bold',
    }
});
export default MainPage;