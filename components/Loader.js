import React from 'react';
import { ActivityIndicator } from 'react-native';
import Wrapper from './Wrapper';

export default function Loader() {
  return (
    <Wrapper>
      <ActivityIndicator size="large" />
    </Wrapper>
  );
}
