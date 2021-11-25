import React from 'react';
import { StyleSheet, View, TextInput, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const scaleWidth = windowWidth / 360;

function Search() {
    return (
        <View style={styles.searchContainer}>
			<View style={styles.searchBar}>
				<Image style={styles.searchIcon} source={require('../assets/images_source/search.png')} />
				<TextInput style={styles.textInput} placeholder="Buscar plantação" placeholderTextColor='rgba(0,0,0,0.2)' />
			</View>
			<Image style={styles.filterIcon} source={require('../assets/images_source/filter.png')} />
		</View>
    )
}

const styles = StyleSheet.create({
    textInput: {
		paddingLeft: 8,
		width: "100%",
		fontSize: 16,
		fontWeight: '300',
		fontStyle: 'italic',
	},
	searchBar: {
    	backgroundColor: '#EBEBEB',
    	flexDirection: 'row',
		width: 272 * scaleWidth,
		height: 40,
		borderRadius: 4,
    	alignItems: 'center',
	},
	searchIcon: {
		marginLeft: 7,
		width: 24,
		height: 24,
	},
	searchContainer: {
		flexDirection: 'row',
		marginTop: 28,
		marginLeft: 32,
		alignItems: 'center',
	},
	filterIcon: {
		marginLeft: 8,
		width: 24,
		height: 24,
	},
});

export default Search;