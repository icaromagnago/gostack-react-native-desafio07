/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import * as CartActions from '../../store/module/cart/action';

import { formatPrice } from '../../util/format';

import {
  Container,
  List,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAdd = (product) => {
    const { navigation } = this.props;
    const { addToCart } = this.props;

    addToCart(product);

    navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        <List
          data={products}
          keyExtractor={(product) => String(product.id)}
          renderItem={({ item }) => (
            <Product key={String(item.id)}>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <AddButton>
                <ProductAmount>
                  <Icon name="add-shopping-cart" size={24} color="#fff" />
                  <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
                </ProductAmount>
                <AddButtonText onPress={() => this.handleAdd(item)}>
                  ADICIONAR
                </AddButtonText>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
