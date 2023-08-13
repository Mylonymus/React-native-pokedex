import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import FavoriteNavigation from './FavoritesNavigation';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
	return (
		<Tab.Navigator initialRouteName="PokedexNavigation">
			<Tab.Screen
				name="FavoriteNavigation"
				component={FavoriteNavigation}
				options={{
					tabBarLabel: 'Favoritos',
					title: 'Favoritos',
					tabBarIcon: ({ color, size }) => (
						<Icon
							name="heart"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="PokedexNavigation"
				component={PokedexNavigation}
				options={{
					tabBarLabel: '',
					title: 'Pokedex',
					tabBarIcon: () => renderPokeball(),
				}}></Tab.Screen>
			<Tab.Screen
				name="AccountNavigation"
				component={AccountNavigation}
				options={{
					tabBarLabel: 'Cuenta',
					title: 'Cuenta',
					tabBarIcon: ({ color, size }) => (
						<Icon
							name="user"
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

function renderPokeball() {
	return (
		<Image
			source={require('../assets/pokeball.png')}
			style={{ width: 75, height: 75, top: -15 }}
		/>
	);
}
