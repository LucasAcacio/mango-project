import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get("window").width;

function PlantCard(props) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('PlantPage', {name:props.name, plant:props.plant, length_:props.length_, width:props.width, description:props.description, water:props.water, time:props.time, date:props.date, seeds:props.seeds})}>
            <View style={styles.cardContainer}>
                <View style={styles.cardText}>
                    <Text style={styles.header}>{props.name}</Text>
                    <Text style={styles.plant}>Cultivo de {props.plant}</Text>
                </View>
                <Image style={styles.cardImage} source={props.image}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: windowWidth - 32,
        height: 88,
        marginHorizontal: 16,
        marginTop: 28,
        borderRadius: 4,
        backgroundColor: "#fff", 
        elevation: 7,
        flexDirection: 'row',
    },
    cardText: {
        display: 'flex',
        flex: 1,
        paddingLeft: 16,
        justifyContent: 'space-evenly',
    },
    cardImage: {
        width: 118,
        height: 88,
        borderRadius: 4,
        alignSelf: 'flex-end',
    },
    header: {
        fontSize: 24,
        lineHeight:18.75,
        color: "#000",
        paddingTop: 20,
    },
    plant: {
        fontSize: 16,
        lineHeight:18.75,
        color:"#000",
        paddingBottom: 12,
    },
});

export default PlantCard;