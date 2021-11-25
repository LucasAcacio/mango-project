import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight, TouchableOpacity, Alert, TextInput} from 'react-native';
// import { useFonts, RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';
import { useNavigation } from '@react-navigation/native';

function ConfirmationSuccess() {
    // let [fontsLoaded] = useFonts({RobotoCondensed_400Regular});

    let username = '';
    const saveNameInput = nameInput => { username = nameInput; };
    const navigation = useNavigation();

    return (
        <View style={styles.registerContainer}>
            <View style={styles.registerTop}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.registerIconBack} source={require('../assets/images_source/arrowleft.png')}/>
                </TouchableOpacity>
                <Text style={styles.registerText}>  Cadastre-se</Text>
            </View>
            <View>
                <Text style={styles.registerTextBody}>Nome:</Text>
                <TextInput style={styles.registerTextInput} placeholder="Insira seu nome e sobrenome" onChangeText={nameInput => saveNameInput(nameInput)}/>
                <Text style={styles.registerTextBody}>Telefone:</Text>
                <TextInput style={styles.registerTextInput} placeholder="Ex.: (DDD)99999-9999"/>
                <Text style={styles.registerTextBody}>E-mail:</Text>
                <TextInput style={styles.registerTextInput} placeholder="Ex.: fulano@gmail.com"/>
                <Text style={styles.registerTextBody}>Senha:</Text>
                <TextInput secureTextEntry={true} style={styles.registerTextInput} placeholder="Insira uma senha mínima de 6 dígitos"/>
                <Text style={styles.registerTextBody}>Confirme sua Senha:</Text>
                <TextInput secureTextEntry={true} style={styles.registerTextInput}/>
                <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Main', {username})}>
                    <Text style={styles.registerButtonText}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.registerFooter}>
                <Text style={styles.registerFooterText}>                       Já possui uma conta?</Text>
                <Text style={{color:'#FF9E2C', fontWeight:'400'}} onPress={() => navigation.navigate('Login')}>                                   Faça Login aqui!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    registerButton: {
        width: "80%",
        height: 45,
        borderRadius: 8,
        backgroundColor: '#FF9E2C',
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerButtonText: {
        color: "#FFF",
        fontSize: 16,
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    registerContainer: {
        margin: 40,
        width:'100%',
        height:'100%',
    },
    registerFooter: {
        textAlign:'center',
        marginTop: 40,
    },
    registerFooterText: {
        fontSize: 18,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    registerIconBack: {
        width: 40,
        height: 30,
        alignSelf:'flex-start',
        marginRight: 40
    },
    registerText: {
        fontSize: 36,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    registerTextBody: {
        margin: 10,
        fontSize: 23,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    registerTextInput: {
        width: "80%",
        height: 45,
        borderRadius: 4,
        backgroundColor: "#EBEBEB",
        marginBottom: 5,
        padding: 10
    },
    registerTop: {
        flexDirection: 'row'
    },
});

export default ConfirmationSuccess