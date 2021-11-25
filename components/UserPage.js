import React from 'react';
import { StyleSheet, View, Text, Image, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { useFonts, RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';

function UserPage({route}) {
    // let [fontsLoaded] = useFonts({RobotoCondensed_400Regular});
    const navigation = useNavigation();

    return(
        <View style={styles.userContainer}>
            <View style={styles.userViewContainer}>
                <View style={styles.userNameArea}>
                    <Text style={styles.userText}>{route.params.username}</Text>
                    <Text style={{fontSize:20,color:'#FFF',fontWeight:'400'}}>Editar Perfil</Text>
                </View>
                <Image style={styles.usericon} source={require('../assets/images_source/usericon.png')}/>
            </View>
            <View style={styles.separator}/>
            <Text style={styles.userText} onPress={() => navigation.navigate('Login')}>Log Out</Text>
            <View style={styles.separator}/>
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        alignSelf: 'center',
        borderRadius: 4,
        margin: 10,
        backgroundColor:"rgba(0, 0, 0, 0.1)"
    },
    userContainer: {
        backgroundColor: "#FF9E2C",
        padding: 45,
        width: '100%',
        height: '100%'
    },
    usericon: {
        width: 80,
        height: 80
    },
    userText: {
        fontSize: 30,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
        color: "#FFF",
        alignSelf: 'center'
    },
    userViewContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center'
    },
});

export default UserPage