import { SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getPokemonAPI, getPokemonDetailsByUrlAPI } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
	const [pokemons, setPokemons] = useState([]);
	const [nextUrl, setNextUrl] = useState(null);
	useEffect(() => {
		(async () => {
			await loadPokemons();
		})();
	}, []);

	const loadPokemons = async () => {
		try {
			const response = await getPokemonAPI(nextUrl);

			const pokemonsArray = [];
			for await (const pokemon of response.results) {
				const pokemonDetail = await getPokemonDetailsByUrlAPI(pokemon.url);

				pokemonsArray.push({
					id: pokemonDetail.id,
					name: pokemonDetail.name,
					type: pokemonDetail.types[0],
					order: pokemonDetail.order,
					image: pokemonDetail.sprites.other['official-artwork'].front_default,
				});
			}
			// console.log(JSON.stringify(pokemonsArray, null, 2));
			setPokemons([...pokemons, ...pokemonsArray]);
			setNextUrl(response.next);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<SafeAreaView>
			<PokemonList
				pokemons={pokemons}
				loadPokemons={loadPokemons}
				isNext={nextUrl}
			/>
		</SafeAreaView>
	);
}
