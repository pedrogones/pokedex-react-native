import React from 'react';
import { PokemonImage } from './styles/detailsStyles';

export default function ({ id }) {
  return (
    <PokemonImage
      source={{
        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      }}
    />
  );
}
