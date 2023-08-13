import React, { useState, useEffect } from 'react';
import { addPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/favorite';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Favorite(props) {
	const { id } = props;
	const [isFavorite, setIsFavorite] = useState(false);
	const Icon = isFavorite ? FontAwesome : FontAwesome5;

	const [reloadCheck, setReloadCheck] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await isPokemonFavoriteApi(id);
				setIsFavorite(response);
			} catch (error) {
				setIsFavorite(false);
			}
		})();
	}, [id, reloadCheck]);

	const onReloadCheckFavorite = () => {
		setReloadCheck((prev) => !prev);
	};

	const addFavorite = async () => {
		try {
			await addPokemonFavoriteApi(id);
			onReloadCheckFavorite();
		} catch (error) {
			console.error(error);
		}
	};

	const removeFavorite = async () => {
		console.log('Eliminar favorito', id);
		try {
			await removePokemonFavoriteApi(id);
			onReloadCheckFavorite();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Icon
			name="heart"
			color="#fff"
			size={20}
			onPress={isFavorite ? removeFavorite : addFavorite}
			style={{ marginRight: 20 }}
		/>
	);
}
