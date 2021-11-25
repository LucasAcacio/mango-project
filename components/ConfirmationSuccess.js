import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity,Alert} from 'react-native';
// import { useFonts, RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';
import { useNavigation } from '@react-navigation/native';

function ConfirmationSuccess({route}) {
    // let [fontsLoaded] = useFonts({RobotoCondensed_400Regular});
    const navigation = useNavigation();

    return(
        <View style={styles.successContainer}>
            <Text style={styles.successText}>{route.params.text}</Text>
            <Image source={require('../assets/images_source/successIcon.png')}/>
            <TouchableOpacity style={styles.successConfirmButton} onPress={() => navigation.navigate('Main', {username:"temporary"})}>
                <Text style={styles.insideButtontext}>OK</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    insideButtontext: {
        fontSize: 16,
        color: "#FFF",
        // fontFamily: 'RobotoCondensed_400Regular',
        alignSelf: 'center',
    },
    successContainer: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    successText: {
        fontSize: 24,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
        alignSelf: 'center'
    },
    successConfirmButton: {
        margin: 20,
        width: 296,
        height: 50,
        backgroundColor: '#FF9E2C',
        borderRadius: 8,
        justifyContent: 'center'
    },
});

export default ConfirmationSuccess