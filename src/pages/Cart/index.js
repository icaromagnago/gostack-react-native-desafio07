import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/module/cart/action';

import { formatPrice } from '../../util/format';

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
  ProductTotal,
  ProductTotalText,
  ProductTotalAmount,
  OrderButton,
  OrderButtonText,
} from './styles';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <Products>
        {cart.map((product) => (
          <Product key={String(product.id)}>
            <ProductInfo>
              <ProductImage
                source={{
                  uri: product.image,
                }}
              />
              <ProductDescription>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductDescription>

              <ProductDelete onPress={() => removeFromCart(product.id)}>
                <Icon name="delete-forever" size={24} color="#7159c1" />
              </ProductDelete>
            </ProductInfo>

            <ProductControls>
              <ProductControlButton onPress={() => decrement(product)}>
                <Icon name="remove-circle-outline" size={24} color="#7159c1" />
              </ProductControlButton>
              <ProductAmount value={String(product.amount)} />
              <ProductControlButton onPress={() => increment(product)}>
                <Icon name="add-circle-outline" size={24} color="#7159c1" />
              </ProductControlButton>

              <ProductSubtotal>{product.subtotal}</ProductSubtotal>
            </ProductControls>
          </Product>
        ))}

        <ProductTotal>
          <ProductTotalText>TOTAL</ProductTotalText>
          <ProductTotalAmount>{total}</ProductTotalAmount>
          <OrderButton>
            <OrderButtonText>FINALIZAR PEDIDO</OrderButtonText>
          </OrderButton>
        </ProductTotal>
      </Products>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
