import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;

function HistoryCard( props ) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardText}>
                <Text style={styles.header}>{props.name}</Text>
                <Text style={styles.description}>Cultivo de {props.plant}</Text>
                <Text style={styles.description}>Colhida em {props.date}</Text>
            </View>
            <Image style={styles.cardImage} source={props.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: windowWidth - 32,
        height: 88,
        marginHorizontal: 16,
        marginTop: 28,
        borderRadius: 4,
        backgroundColor: "#EBEBEB", 
        elevation: 7,
        flexDirection: 'row',
    },
    cardText: {
        display: 'flex',
        flex: 1,
        paddingLeft: 16,
        justifyContent: 'center',
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
        color: "#C4C4C4",
        fontWeight: "400",
        paddingTop: 13,
    },
    description: {
        fontSize: 16,
		lineHeight:18.75,
        color:"#C4C4C4",
    },
});

export default HistoryCard;