import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 30px 20px;
  background: #141419;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
`;

export const ItemCount = styled.Text`
  background: #7159c1;
  color: #fff;
  min-width: 20px;
  min-height: 20px;
  font-size: 13px;
  padding: 2px;
  border-radius: 12px;
  position: absolute;
  text-align: center;
  top: -11px;
  right: -11px;
  overflow: hidden;
`;
