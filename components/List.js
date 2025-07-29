import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import PokemonListItem from './PokemonListItem';

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: white;
`;

export default function List() {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const navigation = useNavigation();

  const fetchPokemon = async (
    url = 'https://pokeapi.co/api/v2/pokemon?limit=20'
  ) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const pokemonWithDetails = data.results.map((pokemon) => ({
        ...pokemon,
        id: pokemon.url.split('/').slice(-2, -1)[0],
      }));

      setPokemonList((prev) => [...prev, ...pokemonWithDetails]);
      setNextUrl(data.next);
    } catch (error) {
      console.error('Erro ao buscar Pokémon:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const handleLoadMore = () => {
    if (nextUrl && !loading) {
      fetchPokemon(nextUrl);
    }
  };

  return (
    <Container>
      {loading && <ActivityIndicator />}
      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PokemonListItem
            name={item.name}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
            onPress={() =>
              navigation.navigate('Detalhes', { name: item.name, id: item.id })
            }
          />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
}
