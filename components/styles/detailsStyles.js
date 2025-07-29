import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';


export const Background = styled.View`
  flex: 1;
  background-color: #97CBAF;
`;


export const Header = styled.View`
  height: 289px;
  background-color: #97CBAF;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px;
  flex-direction: row;
  flex-wrap: wrap;`


export const Badge = styled.Text`
  background-color: ${props => props.color || '#44bd32'};
  height: 30px;
  padding: 4px 12px;
  border-radius: 8px;
  color: white;
  font-size: 12px;
  margin: 4px;`


export const PokemonImage = styled.Image`
  width: 160px;
  height: 160px;
  position: absolute;
  top: 180px;
  justify-content: center;
  align-self: center;
  z-index: 10;`

export const Card = styled.View`
  background-color: white;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 20px;
  flexGrow: 1;
  height: 100%;
`;

export const Row = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;`


export const InfoValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const InfoLabel = styled.Text`
  font-size: 11px;
  font-weight: 600;
  color: #777;
  text-transform: uppercase;
`;

export const InfoBlock = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const MyLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #444;
  margin-bottom: 8px;`


export const StatLabel = styled.Text`
  font-size: 14px;
  width: 60px;`


export const StatBarContainer = styled.View`
  flex: 1;
  background-color: transparent;
  margin: 0 8px;`


export const StatBar = styled.View`
  height: 5px;
  background-color: #ddd;
  border-radius: 4px;
  overflow: hidden;`


export const StatFill = styled.View`
  height: 5px;
  background-color: #478070;
  width: ${props => props.width}%;`


export const StatValue = styled.Text`
  font-size: 14px;
  font-weight: bold;
  width: 30px;
  text-align: right;`


export const ViewSkill = styled.View`
  margin-top: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;`


export const Divider = styled.View`
  width: 1px;
  height: 40px;
  background-color: #ccc;
  margin: 0 32px;
`;


export const ShareButton = styled.TouchableOpacity`
  background-color: #478070;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 100%;
  height: 48px;
`

export const ShareButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`

export const PokemonItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 8px 12px;
  height: 58px;
  margin-bottom: 12px;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 2px;
  elevation: 1; /* Android */
`

export  const PokemonName = styled.Text`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 80;
  text-transform: capitalize;
`

export const PokemonItem_ = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 8px 12px;
  height: 58px;
  margin-bottom: 12px;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 2px;
  elevation: 1;
`

export const PokemonImage_ = styled.Image`
  width: 58px;
  height: 58px;
  margin-right: 12px;
`

export const PokemonName_ = styled.Text`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 80;
  text-transform: capitalize;
`
