import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components';
import { buttonHeight } from '../styles/theme';

const UnderlinedButton = ({ content, onPress, color, withoutPadding, bold, alignStart, ...props }) => (
  <UnderlinedButtonStyled withoutPadding={withoutPadding} onPress={onPress} alignStart={alignStart} {...props}>
    <TextStyled bold={bold} color={color}>
      {content}
    </TextStyled>
  </UnderlinedButtonStyled>
);

const UnderlinedButtonStyled = styled.TouchableOpacity`
  ${({ withoutPadding }) => !withoutPadding && 'padding: 20px;'}
  height: ${buttonHeight}px;
  justify-content: center;
  align-items: ${({ alignStart }) => (alignStart ? 'flex-start' : 'center')};
`;

const TextStyled = styled.Text`
  text-decoration-line: underline;
  color: ${({ color }) => color || '#191919'};
  font-weight: ${({ bold }) => (bold ? (Platform.OS === 'android' ? 'bold' : '800') : 'normal')};
  flex-shrink: 0;
  height: ${buttonHeight}px;
  font-size: 16px;
  line-height: 40px;
  justify-content: center;
  align-items: center;
  text-align-vertical: center;
`;

export default UnderlinedButton;
