import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Share } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import Wrapper from './Wrapper';
import Loader from './Loader';
import PokemonHeader from './PokemonHeader';
import PokemonImage from './PokemonImage';
import PokemonStatsCard from './PokemonStatsCard';
import { Background } from './styles/detailsStyles';


export default function DetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { name, id } = route.params;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const json = await response.json();
        setPokemon(json);
        navigation.setOptions({ title: json.name });
      } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
      }
    }
    fetchPokemon();
  }, [name, navigation]);

  const handleShare = async () => {
    try {
      const types = pokemon.types.map(t => t.type.name).join(', ');
      const stats = pokemon.stats.map(stat => `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`).join('\n');

      const message = `
          Confira o Pokémon **${pokemon.name.toUpperCase()}**!

          Altura: ${(pokemon.height / 10).toFixed(2)} m
          Peso: ${(pokemon.weight / 10).toFixed(2)} kg
          Tipos: ${types}

          Estatísticas:
          ${stats}
          `.trim();
      await Share.share({ message });
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
    }
  };

  if (!pokemon) return <Loader />;

  return (
    
    <Background>
      <ScrollView>
        <Wrapper>
          <PokemonHeader types={pokemon.types} />
          <PokemonImage id={id} />
          <PokemonStatsCard pokemon={pokemon} onShare={handleShare} />
        </Wrapper>
      </ScrollView>
    </Background>
  );
}
