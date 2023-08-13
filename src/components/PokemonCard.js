import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import getColorByPokemonType from '../utils/getColorByPokemonType';
import { capitalize } from 'lodash';
export default function PokemonCard(props) {
	const { pokemon } = props;

	const navigation = useNavigation();
	const pokemonColor = getColorByPokemonType(pokemon.type.type.name);

	const goToPokemon = () => {
		navigation.navigate('Pokemon', { id: pokemon.id });
	};

	const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };
	return (
		<TouchableWithoutFeedback onPress={goToPokemon}>
			<View style={styles.card}>
				<View style={styles.spacing}>
					<View style={bgStyles}>
						<Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
						<Text style={styles.name}>{capitalize(pokemon.name)}</Text>
						<Image
							source={{ uri: pokemon.image }}
							style={styles.image}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		height: 130,
	},
	spacing: {
		flex: 1,
		padding: 5,
	},
	bgStyles: {
		flex: 1,
		borderRadius: 15,
		padding: 10,
	},
	image: {
		position: 'absolute',
		bottom: 2,
		right: 2,
		width: 90,
		height: 90,
	},
	name: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 15,
		paddingTop: 10,
	},
	number: {
		position: 'absolute',
		top: 10,
		right: 10,
		color: '#fff',
		fontSize: 11,
	},
});
