import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { darken } from 'polished';

export const Container = styled.View``;

export const List = styled.FlatList.attrs({
  horizontal: true,
})``;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  align-self: center;
`;

export const ProductPrice = styled.Text`
  margin-top: 14px;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: bold;
`;

export const AddButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background: #7159c1;
  margin: auto;
  border-radius: 4px;
`;

export const ProductAmount = styled.View`
  padding: 10px;
  background: ${darken(0.03, '#7159c1')};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 10px;
`;
