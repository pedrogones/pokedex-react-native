import React from 'react';
import {PokemonItem_, PokemonImage_, PokemonName_ } from './styles/detailsStyles';


export default function PokemonListItem({ name, imageUrl, onPress }) {
  return (
    <PokemonItem_ onPress={onPress}>
      <PokemonImage_ source={{ uri: imageUrl }} />
      <PokemonName_>{name}</PokemonName_>
    </PokemonItem_>
  );
}
