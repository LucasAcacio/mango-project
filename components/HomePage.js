import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { useFonts, RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';

function HomePage() {
    // let [fontsLoaded] = useFonts({RobotoCondensed_400Regular});
    const navigation = useNavigation();
    let username = '';
    const savenameInput = nameInput => { username = nameInput; };

    return (
        <View style={styles.loginContainer}>
            <Image style={styles.logoImage} source={require('../assets/images_source/mangologo.png')} />
            <Text style={styles.loginHeader}>Login</Text>
            <View style={styles.loginBody}>
                <Text style={styles.loginText}>Email ou Telefone:</Text>
                <TextInput style={styles.loginTextInput} placeholder="  Ex.: fulano@gmail.com" onChangeText={nameInput => savenameInput(nameInput)} />
                <Text style={styles.loginText}>Senha: </Text>
                <View style={{ flexDirection: "row" }}>
                    <TextInput style={styles.loginTextInput} />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Main', { username })}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                
                <Text style={{ alignSelf: 'center' }}>OU</Text>

                <TouchableOpacity style={styles.outsideLoginGoogle}>
                    <Image style={styles.outsideLogo} source={require('../assets/images_source/googlelogo.png')} />
                    <Text style={styles.outsideLoginText}> Login com o Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outsideLoginFb}>
                    <Image style={styles.outsideLogo} source={require('../assets/images_source/fblogo.png')} />
                    <Text style={styles.outsideLoginText}> Login com o Facebook</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 100, alignItems: 'center' }}>
                    <Text style={styles.loginText}>Não possui uma conta?</Text>
                    <Text style={{ color: '#FF9E2C' }} onPress={() => navigation.navigate('Register')}>Cadastre-se aqui.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outsideLoginGoogle: {
        width: 180,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#FFF",
        borderWidth: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        borderColor: '#FF0000',
        marginVertical: 10,
    },
    outsideLoginFb: {
        width: 180,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#FFF",
        borderWidth: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        borderColor: '#6100FF',
        marginVertical: 10,
    },
    outsideLoginText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "400",
        // fontFamily: 'RobotoCondensed_400Regular',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    outsideLogo: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    loginContainer: {
        backgroundColor: "#fff",
        paddingTop: 50,
        width: "100%",
        height: "100%"
    },
    loginBody: {
        marginHorizontal: 32,
    },
    loginButton: {
        width: "100%",
        height: 40,
        borderRadius: 4,
        backgroundColor: '#FF9E2C',
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButtonText: {
        color: "#FFF",
        fontSize: 14,
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    logoImage: {
        width: 240,
        height: 55.9,
        alignSelf: 'center',
        marginTop: 55,
    },
    loginHeader: {
        fontSize: 36,
        color: "#000",
        fontWeight: '400',
        // fontFamily: 'RobotoCondensed_400Regular',
        marginVertical: 10,
        alignSelf: 'center',
    },
    loginText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "400",
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    loginTextInput: {
        width: "100%",
        height: 40,
        borderRadius: 4,
        backgroundColor: "#EBEBEB",
        marginTop: 5,
        marginBottom: 10,
    },
});

export default HomePage