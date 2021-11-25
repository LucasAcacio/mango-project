import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight, TouchableOpacity, Alert, TextInput, ScrollView, Platform} from 'react-native';
import CheckBox from 'expo-checkbox';
// import { useFonts, RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';
import { useNavigation } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

function openDatabase() {
    if (Platform.OS === "web") {
        return {
            transaction: () => {
                return {
                    executeSql: () => {},
                };
            },
        };
    }

    const db = SQLite.openDatabase("mango_plant.db");
    return db;
}

const db = openDatabase();

function AddPlant() {
    // let [fontsLoaded] = useFonts({RobotoCondensed_400Regular});
    const [toggleCheckBox0, setToggleCheckBox0] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
    const [toggleCheckBox4, setToggleCheckBox4] = useState(false)
    const [toggleCheckBox5, setToggleCheckBox5] = useState(false)
    const [toggleCheckBox6, setToggleCheckBox6] = useState(false)
    const [toggleCheckBox7, setToggleCheckBox7] = useState(false)
    const [toggleCheckBox8, setToggleCheckBox8] = useState(false)
    const [toggleCheckBox9, setToggleCheckBox9] = useState(false)
    const [toggleCheckBox10, setToggleCheckBox10] = useState(false)
    const [toggleCheckBox11, setToggleCheckBox11] = useState(false)
    const [toggleCheckBox12, setToggleCheckBox12] = useState(false)

    const navigation = useNavigation();

    const [name, setName] = React.useState(null);
    const [culture, setCulture] = React.useState(null);
    const [height, setHeight] = React.useState(null);
    const [width, setWidth] = React.useState(null);
    const [seed, setSeed] = React.useState(null);
    const [notes, setNotes] = React.useState(null);

    React.useEffect(() => {
        db.transaction((tx) => {
        tx.executeSql(
            "create table if not exists plant (id integer primary key not null, name text, culture text, height text, width text, seed text, notes text, water text);"
        );
        });
    }, []);

    const add = (name, culture) => {
        if (name === null || name === "") {
          return false;
        }
    
        db.transaction(
          (tx) => {
            tx.executeSql("insert into plant (name, culture, height, width, seed, notes) values (?, ?, ?, ?, ?, ?)", [name, culture, height, width, seed, notes]);
            tx.executeSql("select * from plant", [], (_, { rows }) =>
              console.log(JSON.stringify(rows))
            );
          },
          null,
        );
      };

    return (
        <ScrollView style={styles.addPlantContainer}>
            <View style={styles.addPlantTop}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.addPlantIconBack} source={require('../assets/images_source/arrowleft.png')}/> 
                </TouchableOpacity>
                <Text style={styles.addPlantText}>Nova Plantação</Text>
            </View>
            <View style={styles.addPlantBody}>
                <Text style={styles.addPlantTextBody}>  Nome da Plantação:</Text>
                <TextInput 
                    onChangeText={(name) => setName(name)}
                    style={styles.addPlantTextInput}/>

                <Text style={styles.addPlantTextBody}>  Cultura(s):</Text>
                <View style={styles.addPlantOptionContainer}>
                    <View style={styles.addPlantOptionColumn}>
                        <View style={{flexDirection:'row', marginVertical: 5}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox0}expo
                                onValueChange={(newValue) => {setToggleCheckBox0(newValue); setCulture('Abobrinha')}}
                                style={styles.addPlantCheckbox}
                            />
                            <Text style={styles.addPlantTextOption}>Abobrinha</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical: 5}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox1}
                                onValueChange={(newValue) => {setToggleCheckBox1(newValue); setCulture('Milho')}}
                                style={styles.addPlantCheckbox}
                            />
                            <Text style={styles.addPlantTextOption}>Milho</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical: 5}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox2}expo
                                onValueChange={(newValue) => {setToggleCheckBox2(newValue); setCulture('Carambola')}}
                                style={styles.addPlantCheckbox}
                            />
                            <Text style={styles.addPlantTextOption}>Carambola</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical: 5}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox3}expo
                                onValueChange={(newValue) => {setToggleCheckBox3(newValue); setCulture('Ciriguela')}}
                                style={styles.addPlantCheckbox}
                            />
                            <Text style={styles.addPlantTextOption}>Ciriguela</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical: 5}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox4}expo
                                onValueChange={(newValue) => {setToggleCheckBox4(newValue); setCulture('Mandioca')}}
                                style={styles.addPlantCheckbox}
                            />
                            <Text style={styles.addPlantTextOption}>Mandioca</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical: 10}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox5}expo
                                onValueChange={(newValue) => {setToggleCheckBox5(newValue); setCulture('Manga')}}
                                style={styles.addPlantCheckbox}
                            />
                            <Text style={styles.addPlantTextOption}>Manga</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical: 10}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox6}expo
                                onValueChange={(newValue) => setToggleCheckBox6(newValue)}
                                style={styles.addPlantCheckbox}
                            />
                            <Text style={styles.addPlantTextOption}>Outra(s):</Text>
                        </View>
                    </View>
                    <View style={styles.addPlantOptionColumn}>
                        <View style={{flexDirection:'row', marginVertical: 5}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox7}expo
                                onValueChange={(newValue) => {setToggleCheckBox7(newValue); setCulture('Batata')}}
                                style={styles.addPlantCheckbox}
                            />
                            <Text style={styles.addPlantTextOption}>Batata</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical: 5}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox8}
                                onValueChange={(newValue) => {setToggleCheckBox8(newValue); setCulture('Morango')}}
                                style={styles.addPlantCheckbox}
                            />
                            <Text style={styles.addPlantTextOption}>Morango</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical: 5}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox9}expo
                                onValueChange={(newValue) => {setToggleCheckBox9(newValue); setCulture('Pepino')}}
                                style={styles.addPlantCheckbox}
                            />
                            <Text style={styles.addPlantTextOption}>Pepino</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical: 5}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox10}expo
                                onValueChange={(newValue) => {setToggleCheckBox10(newValue); setCulture('Tomate')}}
                                style={styles.addPlantCheckbox}
                            />
                            <Text style={styles.addPlantTextOption}>Tomate</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical: 5}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox11}expo
                                onValueChange={(newValue) => {setToggleCheckBox11(newValue); setCulture('Trigo')}}
                                style={styles.addPlantCheckbox}
                            />
                            <Text style={styles.addPlantTextOption}>Trigo</Text>
                        </View>
                        <View style={{flexDirection:'row', marginVertical: 10}}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox12}expo
                                onValueChange={(newValue) => {setToggleCheckBox12(newValue); setCulture('Uva')}}
                                style={styles.addPlantCheckbox}
                            />
                            <Text style={styles.addPlantTextOption}>Uva</Text>
                        </View>
                    </View>
                </View>
                <TextInput 
                    onChangeText={(text) => setCulture(text)}
                    style={styles.addPlantTextInput}/>
                <Text style={styles.addPlantTextBody}>  Tamanho</Text>
                <View style={styles.addPlantSizeBox}>
                    <TextInput 
                        onChangeText={(name) => setHeight(name)}
                        style={styles.addPlantTextInput3}/>
                    <Image style={styles.addPlantSizeIconX} source={require('../assets/images_source/iconx.png')}/>
                    <TextInput 
                        onChangeText={(name) => setWidth(name)}
                        style={styles.addPlantTextInput3}/>
                </View>
                <Text style={styles.addPlantTextBody}>  Quantas sementes plantadas?</Text>
                <TextInput 
                    onChangeText={(name) => setSeed(name)}
                    style={styles.addPlantTextInput}/>

                <Text style={styles.addPlantTextBody}>  Notas:</Text>
                <TextInput 
                    onChangeText={(name) => setNotes(name)}
                    style={styles.addPlantTextInput2}/>
            </View>
            <TouchableOpacity style={styles.addPlantButton} onPress={() => {add(name, culture, height, width, seed, notes); navigation.navigate('Main', {username:"temporary"})}}>
                <Text style={styles.addPlantButtonText}>Adicionar Plantação</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    addPlantBody: {
        flexDirection: 'column',
        marginTop: 20
    },
    addPlantButton: {
        width: "80%",
        height: 50,
        borderRadius: 8,
        backgroundColor: '#FF9E2C',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    addPlantButtonText: {
        color: "#FFF",
        fontSize: 16,
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    addPlantCheckbox: {
        width: 32,
        height: 32,
        alignSelf: 'flex-start',
        backgroundColor: '#EBEBEB',
        borderWidth: 0,
        borderRadius: 8,
    },
    addPlantContainer: {
        width: "100%",
        height: "100%",
    },
    addPlantIconBack: {
        width: 40,
        height: 30,
        alignSelf:'flex-start',
        marginRight: 40
    },
    addPlantOptionContainer: {
        flexDirection: 'row',
    },
    addPlantOptionColumn: {
        flexDirection: 'column',
        marginVertical: 10,
        alignItems: 'flex-start',
        marginLeft: 50,
    },
    addPlantSizeBox: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    addPlantSizeIconX: {
        width: 15,
        height: 15,
        alignSelf: 'center'
    },  
    addPlantText: {
        fontSize: 36,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
    },
    addPlantTextBody: {
        marginLeft: 32,
        fontSize: 20,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
        alignSelf: 'flex-start'
    },
    addPlantTextInput: {
        width: "80%",
        height: 40,
        borderRadius: 4,
        backgroundColor: "#EBEBEB",
        marginBottom: 5,
        padding: 10,
        margin: 5,
        alignSelf: 'center'
    },
    addPlantTextOption: {
        fontSize: 20,
        color: "#000",
        // fontFamily: 'RobotoCondensed_400Regular',
        alignSelf: 'center',
        paddingHorizontal: 10
    },
    addPlantTextInput2: {
        width: "80%",
        height: 90,
        borderRadius: 4,
        backgroundColor: "#EBEBEB",
        marginBottom: 5,
        padding: 10,
        margin: 5,
        alignSelf: 'center',
        alignItems:'flex-start'
    },
    addPlantTextInput3: {
        width: "37%",
        height: 40,
        borderRadius: 4,
        backgroundColor: "#EBEBEB",
        marginBottom: 5,
        padding: 10,
        margin: 5,
        alignSelf: 'center'
    },
    addPlantTop: {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 30
    },
});

export default AddPlant