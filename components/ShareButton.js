import React from 'react';
import { ShareButton as Button, ShareButtonText } from './styles/detailsStyles';

export default function ShareButton({ onPress }) {
  return (
    <Button onPress={onPress}>
      <ShareButtonText>Compartilhar</ShareButtonText>
    </Button>
  );
}
