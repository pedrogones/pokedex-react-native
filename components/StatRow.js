import React from 'react';
import {
  ViewSkill, StatLabel, StatBarContainer, StatBar, StatFill, StatValue,
} from './styles/detailsStyles';

export default function StatRow({ stat }) {
  return (
    <ViewSkill>
      <StatLabel>{stat.stat.name.toUpperCase()}</StatLabel>
      <StatBarContainer>
        <StatBar>
          <StatFill width={Math.min(stat.base_stat, 100)} />
        </StatBar>
      </StatBarContainer>
      <StatValue>{stat.base_stat}</StatValue>
    </ViewSkill>
  );
}
