import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableHighlight, Alert, TextInput, ScrollView} from 'react-native';
// import { useFonts, RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function PlantPage( {route} ) {
    // let [fontsLoaded] = useFonts({RobotoCondensed_400Regular});
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.plantContainer}>
            <View style={styles.plantHead}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.plantIconBackWhite} source={require('../assets/images_source/arrowleftwhite.png')}/> 
                </TouchableOpacity>
                <Text style={styles.plantHeadTitle}>{ route.params.name }</Text>
                <Text style={styles.plantHeadText}>Cultivo de { route.params.plant }</Text>
                <Text style={styles.plantHeadText}>{ route.params.length_ }m x { route.params.width }m</Text>
                <FAB
                style={styles.fabHarvest}
                icon={require("../assets/images_source/harvesticon.png")}
                label="colher"
                onPress={() => navigation.navigate('HarvestPage', {name:route.params.name, plant:route.params.plant, length_:route.params.length_, width:route.params.width, description:route.params.description, time:route.params.time})}
                />
            </View>
            <View style={styles.plantBody}>
                <Text style={styles.plantBodyTextDescription}>{ route.params.description }</Text>
                <Text style={styles.plantBodyTextTitle}>Meta de irrigação diária:</Text>
                <Text style={styles.plantBodyTextTitle2}>{ route.params.water } Litros</Text>
                <View style={styles.plantChartContainer}>
                    <View style={styles.plantChartItem}>
                        <Text style={styles.plantBodyTextTitle3}>20/10</Text>
                        <View style={{width:30, height:10*10,backgroundColor:"#C4C4C4"}}/>
                        <Text style={styles.plantBodyTextTitle3}>10 L</Text>
                    </View>
                    <View style={styles.plantChartItem}>
                        <Text style={styles.plantBodyTextTitle3}>21/10</Text>
                        <View style={{width:30, height:10*20,backgroundColor:"#C4C4C4"}}/>
                        <Text style={styles.plantBodyTextTitle3}>20 L</Text>
                    </View>
                    <View style={styles.plantChartItem}>
                        <Text style={styles.plantBodyTextTitle3}>22/10</Text>
                        <View style={{width:30, height:10*15,backgroundColor:"#C4C4C4"}}/>
                        <Text style={styles.plantBodyTextTitle3}>15 L</Text>
                    </View>
                    <View style={styles.plantChartItem}>
                        <Text style={styles.plantBodyTextTitle3}>23/10</Text>
                        <View style={{width:30, height:10*13,backgroundColor:"#C4C4C4"}}/>
                        <Text style={styles.plantBodyTextTitle3}>13 L</Text>
                    </View>
                    <View style={styles.plantChartItem}>
                        <Text style={styles.plantBodyTextTitle3}>24/10</Text>
                        <View style={{width:30, height:10*16,backgroundColor:"#FF9E2C"}}/>
                        <Text style={styles.plantBodyTextTitle3}>16 L</Text>
                    </View>
                </View>
                <Text style={styles.plantBodyTextDescription2}>Quimicos Utilizados:</Text>
                <Text style={styles.plantBodyTextDescription2}>Azeite</Text>
                <Text style={styles.plantBodyTextDescription2}>Sabão</Text>
                <View style={{height:15}}/>
                <Text style={styles.plantBodyTextDescription2}>Fertilizantes Usados:</Text>
                <Text style={styles.plantBodyTextDescription2}>Fertilizante 1</Text>
                <Text style={styles.plantBodyTextDescription2}>Fertilizante 2</Text>
                <TouchableOpacity style={styles.plantEditButton} onPress={() => navigation.navigate('EditPlant', {name:route.params.name, plant:route.params.plant, length_:route.params.length_, width:route.params.width, date:route.params.date, seeds:route.params.seeds, water:route.params.water})}>
                    <Text><Image source={require('../assets/images_source/penicon.png')}/> Editar informações</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    fabHarvest: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor:"#FF9E2C",
        elevation: 10,
    },
    plantBody: {
        margin: 30,
    },
    plantBodyTextDescription: {
        fontSize: 15,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    plantBodyTextDescription2: {
        fontSize: 18,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    plantBodyTextTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
        marginVertical: 10
    },
    plantBodyTextTitle2: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
        marginVertical: 10
    },
    plantBodyTextTitle3: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
        marginVertical: 10
    },
    plantChartContainer: {
        margin:20,
        flexDirection: 'row',
        alignSelf:'center'
    },
    plantChartItem: {
        flexDirection: 'column-reverse',
        paddingHorizontal: 5
    },
    plantContainer: {
        width: "100%",
        height: "100%",
    },
    plantIconBackWhite: {
        width: 40,
        height: 30,
        alignSelf:'flex-start',
        marginRight: 40
    },
    plantEditButton: {
        width: "80%",
        height: 50,
        borderRadius: 8,
        backgroundColor: '#FF9E2C',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    plantHead: {
        backgroundColor: "#FF9E2C",
        height: 200,
        flexDirection: 'column',
        paddingTop: 40,
        paddingLeft: 30
    },
    plantHeadTitle: {
        fontSize: 32,
        color: "#FFF",
        // fontFamily: 'RobotoCondensed_400Regular',
        marginLeft: 30,
    },
    plantHeadText:{
        marginLeft: 30,
        fontSize: 24,
        color: "#FFF",
        // fontFamily: 'RobotoCondensed_400Regular',
    }
});

export default PlantPage