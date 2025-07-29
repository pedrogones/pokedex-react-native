import React from 'react';
import {
  Card, Row, InfoLabel, InfoValue, Divider, MyLabel, InfoBlock
} from './styles/detailsStyles';
import StatRow from './StatRow';
import ShareButton from './ShareButton';

export default function PokemonStatsCard({ pokemon, onShare }) {
  return (
    <Card>
      <Row>
      <InfoBlock>
        <InfoValue>{pokemon.height / 10} m</InfoValue>
        <InfoLabel>HEIGHT</InfoLabel>
      </InfoBlock>

      <Divider />

      <InfoBlock>
        <InfoValue>{pokemon.weight / 10} kg</InfoValue>
        <InfoLabel>WEIGHT</InfoLabel>
      </InfoBlock>
    </Row>


      <MyLabel>Base Stats</MyLabel>
      {pokemon.stats.map((stat, index) => (
        <StatRow key={index} stat={stat} />
      ))}

      <ShareButton onPress={onShare} />
    </Card>
  );
}
