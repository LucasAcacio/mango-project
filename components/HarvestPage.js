import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableHighlight, Alert, TextInput} from 'react-native';
// import { useFonts, RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';
import { useNavigation } from '@react-navigation/native';

function HarvestPage({route}) {
    // let [fontsLoaded] = useFonts({RobotoCondensed_400Regular});
    const navigation = useNavigation();

    return (
        <View style={styles.harvestContainer}>
            <View style={styles.harvestTop}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.harvestIconBack} source={require('../assets/images_source/arrowleft.png')}/>
                </TouchableOpacity>
                <Text style={styles.harvestText}>     Colheita</Text>
            </View>
            <Text style={styles.harvestTitle}>{ route.params.name }</Text>
            <Text style={styles.harvestData}>Cultivo de { route.params.plant }</Text>
            <Text style={styles.harvestData}>{ route.params.length_ }m x { route.params.width }m</Text>
            <Text style={styles.harvestData}>{ route.params.time } de cultivo</Text>
            <View style={styles.harvestBox}>
                <Text style={styles.harvestBoxText}>Quantos quilos foram obtidos?</Text>
                <TextInput style={styles.harvestBoxTextInput} placeholder="kg"/>
            </View>
            <Text style={styles.harvestTitle}>Resumo dos dados:</Text>
            <Text style={styles.harvestData}>{ route.params.description }</Text>
            <TouchableOpacity style={styles.harvestButton} onPress={() => navigation.navigate('Confirmation', {text:"Colheita Finalizada"})}>
                <Text style={styles.harvestButtonText}>Finalizar a colheita</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    harvestBox: {
        flexDirection:'row',
        marginHorizontal: 40,
        marginTop: 60
    },
    harvestBoxText: {
        fontSize: 24,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
        marginLeft: 20,
        marginVertical: 5,
        maxWidth: 150,
        textAlign: 'center'
    },
    harvestBoxTextInput: {
        width: "40%",
        height: 45,
        borderRadius: 4,
        backgroundColor: "#EBEBEB",
        marginBottom: 5,
        padding: 10,
        alignSelf: 'center',
        marginHorizontal: 30
    },  
    harvestButton: {
        margin: 20,
        width: "90%",
        height: 50,
        backgroundColor: '#FF9E2C',
        borderRadius: 8,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 80
    },
    harvestButtonText: {
        fontSize: 16,
        color: "#FFF",
        // fontFamily: 'RobotoCondensed_400Regular',
        alignSelf: 'center',
    },
    harvestContainer: {
      width: "100%",
      height: "100%",
    },
    harvestData: {
        fontSize: 18,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
        marginLeft: 20,
        marginVertical: 5,
        maxWidth: "90%"
    },
    harvestDescription: {
        fontSize: 26,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
        marginLeft: 20,
        marginTop: 30
    },
    harvestIconBack: {
        width: 40,
        height: 30,
        alignSelf:'flex-start',
        marginRight: 40
    },
    harvestText: {
        fontSize: 36,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    harvestTitle: {
        fontSize: 30,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
        marginLeft: 20,
        marginTop: 30
    },
    harvestTop: {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 30
    },
});

export default HarvestPage