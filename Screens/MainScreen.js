import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Search from '../components/Search';
import PlantCard from '../components/PlantCard';
import HistoryCard from '../components/HistoryCard';
import NewsCard from '../components/NewsCard';

const windowWidth = Dimensions.get("window").width;

function FirstRoute() {
	const navigation = useNavigation();
	return (
		<View style={{ flex: 1 }}>
			<ScrollView>
				<Search />
				<PlantCard name={"Plantação X"} plant={"Manga"} image={plantsImages.manga} length_="10" width="25" description="Descrição" water="20" time="8 meses" date="19/08/2021" seeds="10" />
				<PlantCard name={"Plantação Y"} plant={"Milho"} image={plantsImages.milho} length_="10" width="25" description="Descrição" water="20" time="4 meses" date="19/08/2021" seeds="10" />
				<View style={{ height: 24 }} />
			</ScrollView>

			<View style={styles.newPlant} >
				<FAB style={styles.newPlantBtn} small={false} icon="plus" color='white' onPress={() => navigation.navigate('AddPlant')}/>
			</View>
			<Text style={styles.newPlantText}>Nova Plantação</Text>
		</View>
	)
};

const SecondRoute = () => (
	<ScrollView>
		<Search/>
		<HistoryCard name={"Plantação Z"} plant={"Mandioca"} date={"22/02/2020"} image={plantsImages.mandioca} />
		<View style={{height:24}} />
	</ScrollView>
);

const ThirdRoute = () => (
	<ScrollView>
		<NewsCard header={"Comissão debate fomento à agricultura de baixo carbono"} source={"Câmara dos Deputados"} hasImage={true} image={newsImages.news1}/>
		<NewsCard header={"CNA e Federações discutem abastecimento de defensivos e fertilizantes"} source={"Notícias Agrícolas"} hasImage={false}/>
		<NewsCard header={"Câmara premia ministra da Agricultura e outras personalidades do agro brasileiro."} source={"Câmara dos Deputados"} hasImage={true} image={newsImages.news2}/>
		<View style={{height:24}} />
	</ScrollView>
);

const plantsImages = {
	manga: require('../assets/images_source/manga.png'),
	milho: require('../assets/images_source/milho.png'),
	mandioca: require('../assets/images_source/mandioca.png'),
};

const newsImages = {
	news1: require('../assets/images_source/news1.png'),
	news2: require('../assets/images_source/news2.png'),
}

class TelaPrincipal extends Component {
	state = {
		index: 0,
		routes: [
			{ key: 'first', title: 'Plantações' },
			{ key: 'second', title: 'Histórico' },
			{ key: 'third', title: 'Notícias' },
		],
	};

	_handleIndexChange = index => this.setState({ index });

	_renderHeader = props => {
		return (
			<TabBar {...props}
				indicatorStyle={{ backgroundColor:'white', height:4 }}
				style={{ backgroundColor: '#FF9E2C' }}
				labelStyle={{ textTransform:'capitalize', fontSize:18, marginTop:0 }}
				inactiveColor='rgba(255, 255, 255, 0.4)'
			/>
		);
	};
	
	_renderScene = SceneMap({ first: FirstRoute, second: SecondRoute, third: ThirdRoute });

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.header}>
					<View style={styles.headerContainer}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('UserPage', {username:this.props.route.params.username}) }>
							<Image style={styles.userIcon} source={require('../assets/images_source/usericon.png')} />
						</TouchableOpacity>
						<Image style={styles.logo} source={require('../assets/images_source/mangologo2.png')} />
						<View>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('WeatherPage') }>
								<Image style={styles.weatherIcon} source={require('../assets/images_source/rainy.png')} />
								<Text style={styles.weatherText}>26º</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.divider} />
				</View>
				<TabView
					navigationState={this.state}
					renderScene={this._renderScene}
					renderTabBar={this._renderHeader}
					onIndexChange={this._handleIndexChange}
					initialLayout={{ width: windowWidth }}
				/>
			</View>
		)
	}
}

export default TelaPrincipal;

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#FF9E2C',
		maxHeight: 120,
		minHeight: 120,
	},
	headerContainer: {
		marginTop: 50,
		justifyContent: "space-evenly",
		flexDirection: 'row',
	},
	userIcon: {
		width: 40,
		height: 40,
	},
	logo: {
		width: 195,
		height: 42,
	},
	weatherIcon: {
		width: 26,
		height: 22,
	},
	weatherText: {
		fontSize: 18,
		color: 'white',
	},
	divider: {
		backgroundColor: "black",
		opacity: 0.1,
		minHeight: 2,
		maxHeight: 2,
		marginTop: 20
	},
	newPlantBtn: {
		backgroundColor:'#FF9E2C',
	},
	newPlant: {
		position:'absolute',
		right:32,
		bottom:32,
	},
	newPlantText: {
		position:'absolute',
		right:22,
		bottom:16,
		fontSize:12,
		lineHeight:14,
	}
});
