import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, TouchableHighlight, Alert, TextInput} from 'react-native';
// import { useFonts, RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

// import Slider from '@react-native-community/slider'

function EditPlant( {route} ) {
    // let [fontsLoaded] = useFonts({RobotoCondensed_400Regular});
    const navigation = useNavigation();
    const [sliderValue, setSliderValue] = useState(0);
    const [toggleCheckBox0, setToggleCheckBox0] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false)

    return (
        <ScrollView style={styles.editPlantContainer}>
            <View style={styles.editPlantTop}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.editPlantIconBack} source={require('../assets/images_source/arrowleft.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.editPlantDataRow}>
                <View style={styles.editPlantDataColumn}>
                    <Text style={styles.editPlantTextName}>{ route.params.name }<Image source={require('../assets/images_source/penicon.png')}/></Text>
                    <Text style={styles.editPlantText}>Cultivo de { route.params.plant }<Image source={require('../assets/images_source/penicon.png')}/></Text>
                    <View style={styles.editPlantSizeBox}>
                            <Text style={styles.editPlantText}>{ route.params.length_ }<Image source={require('../assets/images_source/penicon.png')}/></Text>
                            <Image style={styles.editPlantSizeIconX} source={require('../assets/images_source/iconx.png')}/>
                            <Text style={{marginVertical: 5,
                                    fontSize: 24,
                                    color: "#000",
                                    // fontFamily: 'RobotoCondensed_400Regular',
                                }}
                                    >  { route.params.width } <Image source={require('../assets/images_source/penicon.png')}/></Text>
                    </View>
                    <Text style={styles.editPlantText}>{ route.params.date } <Image source={require('../assets/images_source/penicon.png')}/></Text>
                </View>
                <View style={styles.editPlantDataColumn}>
                    <Image style={styles.editPlantIcon} source={require("../assets/images_source/manga.png")}/>
                </View>
            </View>
            <View style={styles.editPlantBox}>
                <Text style={styles.editPlantText}>Sementes Plantadas:</Text>
                <TextInput style={styles.editPlantTextInput} placeholder={ route.params.seeds }/>
                <Text style={styles.editPlantText}>Meta de Irrigação Diária (Em litros):</Text>
                <TextInput style={styles.editPlantTextInput} placeholder={ route.params.water }/>
                <Text style={styles.editPlantText2}>Quanto já foi irrigado hoje?</Text>
                <Text style={styles.editPlantSliderLabel}>{sliderValue}</Text>
                {/* <Slider
                style={{width: "60%", height: 40, alignSelf:'center'}}
                minimumValue={0}
                maximumValue={20}
                step={1}
                thumbTintColor="#C4C4C4"
                minimumTrackTintColor="#C4C4C4"
                maximumTrackTintColor="#EBEBEB"
                onValueChange={(id) => setSliderValue(id)}
                sliderValue={sliderValue}
                /> */}
                <Text style={styles.editPlantSliderLabel}>0 L                  10 L                  20 L</Text>
                <Text style={styles.editPlantText2}>Choveu hoje?</Text>
                <View style={styles.editPlantCheckboxContainer}>
                    <View style={styles.editPlantCheckboxContainerItem}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox0}expo
                            onValueChange={(newValue) => setToggleCheckBox0(newValue)}
                            style={styles.editPlantCheckbox}
                        />
                        <Text>Não</Text>
                    </View>
                    <View style={styles.editPlantCheckboxContainerItem}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox1}expo
                            onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                            style={styles.editPlantCheckbox}
                        />
                        <Text>Pouco</Text>
                    </View>
                    <View style={styles.editPlantCheckboxContainerItem}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox2}expo
                            onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                            style={styles.editPlantCheckbox}
                        />
                        <Text>Sim</Text>
                    </View>
                    <View style={styles.editPlantCheckboxContainerItem}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox3}expo
                            onValueChange={(newValue) => setToggleCheckBox3(newValue)}
                            style={styles.editPlantCheckbox}
                        />
                        <Text>Muito</Text>
                    </View>
                </View>
                <Text style={styles.editPlantText2}>Quais químicos foram usados na plantação?</Text>
                <TextInput style={styles.editPlantTextInput2}/>
                <Text style={styles.editPlantText2}>Quais fertilizantes foram usados na plantação?</Text>
                <TextInput style={styles.editPlantTextInput2}/>
                <TouchableOpacity style={styles.editPlantButton} onPress={() => navigation.navigate('Confirmation', {text:"Alterações Salvas"})}>
                    <Text style={styles.editPlantButtonText}>Salvar alterações</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    editPlantBox: {
        flexDirection: 'column',
        marginTop: 20,
    },
    editPlantButton: {
        width: "80%",
        height: 50,
        borderRadius: 8,
        backgroundColor: '#FF9E2C',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    editPlantButtonText: {
        color: "#FFF",
        fontSize: 16,
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    editPlantCheckbox: {
        width: 32,
        height: 32,
        borderRadius: 100,
        backgroundColor: '#EBEBEB',
        borderWidth: 0,
    },
    editPlantCheckboxContainer: {
        flexDirection:'row',
        alignSelf: 'center',
        marginVertical: 5,
    },
    editPlantCheckboxContainerItem: {
        flexDirection:'column',
        marginHorizontal:10,
        alignItems:'center'
    },
    editPlantContainer: {
        width: "100%",
        height: "100%",
    },
    editPlantDataColumn: {
        width: "60%",
        flexDirection:'column',
        marginTop: 20
    },
    editPlantDataRow: {
        flexDirection:'row'
    },
    editPlantTop: {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 30
    },
    editPlantIcon: {
        width: 100,
        height: 100,
        marginHorizontal: 30,
        borderRadius: 8,
    },
    editPlantIconBack: {
        width: 40,
        height: 30,
        alignSelf:'flex-start',
        marginRight: 40
    },
    editPlantSizeIconX: {
        alignSelf: 'center'
    }, 
    editPlantSizeBox: {
        flexDirection: 'row',
    },
    editPlantSliderLabel: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '400',
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    editPlantText: {
        marginLeft: 30,
        marginVertical: 5,
        fontSize: 24,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    editPlantText2:{
        alignSelf:'center',
        marginVertical: 5,
        fontSize: 18,
        maxWidth: 400,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
    }, 
    editPlantTextInput: {
        width: "30%",
        height: 45,
        borderRadius: 4,
        backgroundColor: "#EBEBEB",
        marginBottom: 5,
        padding: 10,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20
    },
    editPlantTextInput2: {
        width: "80%",
        height: 60,
        borderRadius: 4,
        backgroundColor: "#EBEBEB",
        marginBottom: 5,
        padding: 10,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20
    },
    editPlantTextName: {
        fontSize: 32,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
        marginLeft: 30,
    },
});

export default EditPlant