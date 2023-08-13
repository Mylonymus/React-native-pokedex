import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from '../screens/Favorite';
import PokemonScreen from '../screens/Pokemon';
const Stack = createStackNavigator();

export default function FavoritesNavigation() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Favorite"
				component={FavoriteScreen}
				options={{ title: '', headerTitle: '', headerTransparent: true }}
			/>
			<Stack.Screen
				name="Pokemon"
				component={PokemonScreen}
				options={{ title: '', headerTitle: '', headerTransparent: true }}
			/>
		</Stack.Navigator>
	);
}
