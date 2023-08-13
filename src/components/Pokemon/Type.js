import { StyleSheet, View, Text } from 'react-native';
import { map, capitalize } from 'lodash';
import React from 'react';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Type(props) {
	const { types } = props;
	return (
		<View style={styles.content}>
			{map(types, (item, index) => (
				<View
					key={index}
					style={{ ...styles.pill, backgroundColor: getColorByPokemonType(item.type.name) }}>
					<Text style={styles.textPill}>{capitalize(item.type.name)}</Text>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		marginTop: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#fff',
	},
	pill: {
		paddingHorizontal: 30,
		paddingVertical: 5,
		borderRadius: 20,
		marginHorizontal: 10,
	},
	textPill: {
		color: '#fff',
	},
});
