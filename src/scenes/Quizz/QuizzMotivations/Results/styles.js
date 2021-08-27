import styled, { css } from 'styled-components';
import H3 from '../../../../components/H3';
import H1 from '../../../../components/H1';
import { screenWidth } from '../../../../styles/theme';
import TextStyled from '../../../../components/TextStyled';

export const ItemStyled = styled.View`
  margin: 10px;
  max-width: ${screenWidth / 3}px;
  min-width: ${screenWidth / 3}px;
  max-height: ${screenWidth / 3}px;
  min-height: ${screenWidth / 3}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color || '#fff'};
  border-radius: 20px;
`;

export const ItemContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
export const ItemsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const FullScreenBackground = styled.ScrollView`
  background-color: #f9f9f9;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 100%;
  min-height: 100%;
  max-width: ${screenWidth}px;
  min-width: ${screenWidth}px;
`;

export const ResultContainer = styled.View`
  background-color: #efefef;
  padding: 20px;
  padding-bottom: 100px;
  height: 100%;
`;

export const ContainerSection = styled.View`
  margin: 5px 0 20px 0;
`;
export const ResultParagraph = styled(TextStyled)`
  margin: 8px 0;
`;

export const commonCss = css`
  width: 85%;
  flex-shrink: 0;
`;

export const TopContainer = styled.View`
  padding: 20px 25px 40px;
`;

export const ResultTitle = styled(H3)`
  ${commonCss}
  font-weight: bold;
  color: #4030a5;
`;

export const TopTitle = styled(H1)`
  ${commonCss}
  margin-top: 10px;
  margin-bottom: 20px;
`;
