import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;

function NewsCard( props ) {
    return (
        <View style={styles.cardContainer}>
			{ props.hasImage == true && 
            	<Image style={styles.cardImage} source={props.image}/>
			}
            <View>
                <Text style={styles.header}> {props.header} </Text>
                <Text style={styles.source}> {props.source} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#EBEBEB", 
        width: windowWidth - 32,
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 4,
        elevation: 7,
		paddingTop: 16,
		paddingHorizontal: 16,
		paddingBottom: 25,
    },
    cardImage: {
        width: windowWidth - 64,
        height: (windowWidth - 64) / 2.3,
		marginBottom: 9,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    header: {
        fontSize: 18,
		lineHeight: 21.09,
        color: "black",
		textDecorationLine: 'underline',
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    source: {
        fontSize: 10,
		lineHeight: 11.72,
        color: "black",
		textDecorationLine: 'underline',
		marginTop: 8,
        // fontFamily: 'RobotoCondensed_400Regular',
    },
});

export default NewsCard;