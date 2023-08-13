import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull } from 'lodash';
import { FAVORITE_STORAGE } from '../utils/constants';

export async function getPokemonsFavoriteApi() {
	try {
		const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
		return response ? JSON.parse(response) : [];
	} catch (error) {
		throw error;
	}
}

export async function addPokemonFavoriteApi(id) {
	console.log(id);
	try {
		const favorites = await getPokemonsFavoriteApi();
		favorites.push(id);
		console.log(favorites);
		await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
	} catch (error) {
		throw error;
	}
}

export async function isPokemonFavoriteApi(id) {
	console.log(id);
	try {
		const response = await getPokemonsFavoriteApi();
		return includes(response, id);
	} catch (error) {
		throw error;
	}
}

export async function removePokemonFavoriteApi(id) {
	console.log(id);
	try {
		const favorites = await getPokemonsFavoriteApi();
		const newFavorites = pull(favorites, id);
		await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
	} catch (error) {
		throw error;
	}
}
