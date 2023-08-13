import { Button, SafeAreaView, Text } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getPokemonsFavoriteApi } from '../api/favorite';
import useAuth from '../hooks/useAuth';
import { getPokemonDetailsAPI } from '../api/pokemon';
import PokemonList from '../components/PokemonList';
import NotLogged from '../components/NotLogged';

export default function Favorite() {
	const [pokemons, setPokemons] = useState([]);
	const { auth } = useAuth();

	useFocusEffect(
		useCallback(() => {
			if (auth) {
				(async () => {
					const response = await getPokemonsFavoriteApi();

					const pokemonsArray = [];
					for await (const id of response) {
						const pokemonDetail = await getPokemonDetailsAPI(id);

						pokemonsArray.push({
							id: pokemonDetail.id,
							name: pokemonDetail.name,
							type: pokemonDetail.types[0],
							order: pokemonDetail.order,
							image: pokemonDetail.sprites.other['official-artwork'].front_default,
						});
					}

					setPokemons(pokemonsArray);
				})();
			}
		}, [auth])
	);

	return !auth ? <NotLogged /> : <PokemonList pokemons={pokemons} />;
}
