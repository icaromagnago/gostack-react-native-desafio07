import styled from 'styled-components';

export const Container = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin: 15px;
`;

export const Products = styled.View``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDescription = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const ProductSubtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  flex: 1;
`;

export const ProductTotal = styled.View`
  margin-top: 30px;
`;

export const ProductTotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;

export const ProductTotalAmount = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 32px;
`;

export const OrderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background: #7159c1;
  border-radius: 4px;
  padding: 12px;
`;

export const OrderButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
