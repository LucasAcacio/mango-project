import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
// import { useFonts, RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';
import { useNavigation } from '@react-navigation/native';

function WeatherPage() {
    // let [fontsLoaded] = useFonts({RobotoCondensed_400Regular});
    const navigation = useNavigation();

    return(
        <View style={styles.weatherContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.iconBack} source={require('../assets/images_source/arrowleftwhite.png')}/> 
            </TouchableOpacity>
            <Text style={styles.weatherText}>Previsão para hoje:</Text>
            <View style={styles.weatherToday}>
                <Image style={styles.weatherIconMain} source={require('../assets/images_source/rainy.png')}/>
                <View style={{padding:20}}>
                    <Text style={styles.weatherTextTemp}>26ºC</Text>
                    <Text style={styles.weatherText}>Recife-PE</Text>
                </View>
            </View>
            <View style={styles.separator}/>
            <Text style={styles.weatherText}>Previsão para os próximos 3 dias:</Text>
            <View style={styles.weatherPredict}>
                <Image style={styles.weatherIconPredict} source={require('../assets/images_source/rainy.png')}/>
                <View style={{padding:20}}>
                    <Text style={styles.weatherTextTemp}>22ºC</Text>
                </View>
            </View>
            <View style={styles.weatherPredict}>
                <Image style={styles.weatherIconPredict} source={require('../assets/images_source/clear-cloudy.png')}/>
                <View style={{padding:20}}>
                    <Text style={styles.weatherTextTemp}>27ºC</Text>
                </View>
            </View>
            <View style={styles.weatherPredict}>
                <Image style={styles.weatherIconPredict} source={require('../assets/images_source/sunny.png')}/>
                <View style={{padding:20}}>
                    <Text style={styles.weatherTextTemp}>30ºC</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherContainer: {
        backgroundColor: "#FF9E2C",
        padding: 46,
        width: '100%',
        height: '100%'
    },  
    weatherIconMain: {
        width: 100,
        height: 100,
        alignSelf:'center'
    },
    weatherIconPredict: {
        width: 60,
        height: 60,
        alignSelf:'center'
    },
    weatherPredict: {
        alignSelf: 'center',
        flexDirection: 'row',
    },
    weatherText: {
        fontSize: 20,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
        color: "#FFF",
    },
    weatherTextTemp: {
        fontSize: 50,
        color: "#000",
        fontWeight: "400",
        // fontFamily: 'RobotoCondensed_400Regular',
        color: "#FFF",
    },  
    weatherToday: {
        alignSelf: 'center',
        flexDirection: 'row',
    },
    separator: {
        width: "100%",
        height: 1,
        alignSelf: 'center',
        borderRadius: 4,
        margin: 10,
        backgroundColor:"rgba(0, 0, 0, 0.1)"
    },
    iconBack: {
        width: 40,
        height: 30,
        alignSelf:'flex-start',
        marginBottom:16
    },
});

export default WeatherPage
