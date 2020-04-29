import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, BasketContainer } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <Logo />
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#FFF" />
      </BasketContainer>
    </Container>
  );
}
