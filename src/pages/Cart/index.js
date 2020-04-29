import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDescription,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Products>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ProductDescription>
              <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
              <ProductPrice>179.9</ProductPrice>
            </ProductDescription>
            <ProductDelete>
              <Icon name="delete-forever" size={24} color="#7159c1" />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton>
              <Icon name="add-circle-outline" size={24} color="#7159c1" />
            </ProductControlButton>
            <ProductAmount value="2" />
            <ProductControlButton>
              <Icon name="remove-circle-outline" size={24} color="#7159c1" />
            </ProductControlButton>
            <ProductSubtotal>359.8</ProductSubtotal>
          </ProductControls>
        </Product>
      </Products>
    </Container>
  );
}
