import React, { useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import ButtonPrimary from '../../components/ButtonPrimary';
import H1 from '../../components/H1';
import Calendar from '../../components/Illustrations/Calendar';
import CocktailGlassTriangle from '../../components/Illustrations/CocktailGlassTriangle';
import InfoObjectif from '../../components/Illustrations/InfoObjectif';
import QButton from '../../components/QButton';
import TextStyled from '../../components/TextStyled';
import { screenHeight, screenWidth } from '../../styles/theme';
import { daysWithGoalNoDrinkState, drinksByDrinkingDayState } from '../../recoil/gains';
import UnderlinedButton from '../../components/UnderlinedButton';
import HelpModalCountConsumption from './HelpModalCountConsumption';

const Goal = ({ navigation }) => {
  const [helpVisible, setHelpVisible] = useState(false);
  const [daysWithGoalNoDrink, setDaysWithGoalNoDrink] = useRecoilState(daysWithGoalNoDrinkState);
  const toggleDayWithGoalNoDrink = (day) =>
    setDaysWithGoalNoDrink((days) => (days.includes(day) ? days.filter((d) => d !== day) : [...days, day]));

  const [drinksByDrinkingDay, setDrinksByDrinkingDay] = useRecoilState(drinksByDrinkingDayState);

  const drinkByWeek = useMemo(
    () => drinksByDrinkingDay * (7 - daysWithGoalNoDrink.length),
    [daysWithGoalNoDrink.length, drinksByDrinkingDay]
  );

  return (
    <>
      <ScreenBgStyled>
        <BackButton content="< Retour" onPress={navigation.goBack} bold />
        <TopContainer>
          <TopTitle>
            <H1 color="#4030a5">Se fixer un objectif</H1>
          </TopTitle>
        </TopContainer>
        <Container>
          <ContainerTime>
            <TextStyled>
              La durée de votre objectif est d'<TextStyled bold>un mois</TextStyled>
            </TextStyled>
          </ContainerTime>
          <Row>
            <Calendar size={24} />
            <TextSemiBold>
              <TextStyled>Jours où je m'engage à ne pas boire d'alcool</TextStyled>
            </TextSemiBold>
          </Row>
          <DayContainer>
            <DayButton
              content="L"
              active={daysWithGoalNoDrink.includes('monday')}
              onPress={() => toggleDayWithGoalNoDrink('monday')}
            />
            <DayButton
              content="M"
              active={daysWithGoalNoDrink.includes('tuesday')}
              onPress={() => toggleDayWithGoalNoDrink('tuesday')}
            />
            <DayButton
              content="M"
              active={daysWithGoalNoDrink.includes('wednesday')}
              onPress={() => toggleDayWithGoalNoDrink('wednesday')}
            />
            <DayButton
              content="J"
              active={daysWithGoalNoDrink.includes('thursday')}
              onPress={() => toggleDayWithGoalNoDrink('thursday')}
            />
            <DayButton
              content="V"
              active={daysWithGoalNoDrink.includes('friday')}
              onPress={() => toggleDayWithGoalNoDrink('friday')}
            />
            <DayButton
              content="S"
              active={daysWithGoalNoDrink.includes('saturday')}
              onPress={() => toggleDayWithGoalNoDrink('saturday')}
            />
            <DayButton
              content="D"
              active={daysWithGoalNoDrink.includes('sunday')}
              onPress={() => toggleDayWithGoalNoDrink('sunday')}
            />
          </DayContainer>
          <Row>
            <CocktailGlassTriangle size={24} />
            <TextSemiBold>
              <TextStyled> Nombre de verres par jours que je m'autorise quand je bois de l'alcool</TextStyled>
            </TextSemiBold>
          </Row>
          <Row>
            <HelpCount onPress={() => setHelpVisible(true)} hitSlop={{ top: 40, bottom: 40, left: 40, right: 40 }}>
              <HelpCountCaption>Comment compter un verre sans me tromper</HelpCountCaption>
              <InfoObjectif size={15} color={'#000000'} />
            </HelpCount>
          </Row>
          <QuantityContainer>
            <QButton
              content="-"
              disabled={drinksByDrinkingDay <= 0}
              onPress={() => setDrinksByDrinkingDay((q) => q - 1)}
            />
            <NumberDrink>
              <TextStyled bold color="#4030a5">
                {drinksByDrinkingDay}
              </TextStyled>
            </NumberDrink>
            <QButton content="+" onPress={() => setDrinksByDrinkingDay((q) => q + 1)} />
          </QuantityContainer>
          <DrinkByWeekContainer>
            <TextStyled>
              {' '}
              {7 - daysWithGoalNoDrink.length} jours avec {drinksByDrinkingDay} verres
            </TextStyled>
            <TextStyled bold> soit {drinkByWeek} verres par semaine</TextStyled>
          </DrinkByWeekContainer>
          <CTAButtonContainer>
            <ButtonPrimary
              content="Continuer"
              onPress={() =>
                navigation.navigate('GAINS_REMINDER', {
                  enableContinueButton: true,
                  onPressContinueButton: () => navigation.navigate('GAINS_ESTIMATE_PREVIOUS_CONSUMPTION'),
                })
              }
              disabled={daysWithGoalNoDrink.length === 0 || drinksByDrinkingDay === 0}
            />
          </CTAButtonContainer>
        </Container>
      </ScreenBgStyled>
      <HelpModalCountConsumption visible={helpVisible} onClose={() => setHelpVisible(false)} />
    </>
  );
};

const ScreenBgStyled = styled.ScrollView`
  background-color: #f9f9f9;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 100%;
`;

const TopContainer = styled.View`
  padding: 0px 30px 0px;
`;

const TopTitle = styled.View`
  width: 95%;
  flex-direction: row;
  flex-shrink: 0;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const BackButton = styled(UnderlinedButton)`
  margin-right: auto;
  margin-bottom: 30px;
`;

const Container = styled.View`
  padding: 0px 30px 0px;
`;

const ContainerTime = styled.View`
  margin-bottom: ${screenHeight * 0.03}px;
`;

const Row = styled.View`
  flex-direction: row;
  margin-bottom: ${screenHeight * 0.02}px;
  align-items: center;
`;

const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NumberDrink = styled.Text`
  margin-right: ${screenWidth * 0.05}px;
  margin-left: ${screenWidth * 0.05}px;
  font-size: 18px;
`;

const CTAButtonContainer = styled.View`
  height: ${screenHeight * 0.22}px;
  align-items: center;
  background-color: #f9f9f9;
  flex-shrink: 1;
`;

const DayContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: ${screenHeight * 0.06}px;
`;

const DayButton = ({ small, content, onPress, active }) => (
  <QButtonStyled onPress={onPress}>
    <QButtonContentContainer small={small} backgroundColor={active ? '#4030A5' : '#eeeeee'}>
      <QButtonContent color={active ? '#eeeeee' : '#000000'}>{content}</QButtonContent>
    </QButtonContentContainer>
  </QButtonStyled>
);

const qButtonSize = 35;
const QButtonStyled = styled.TouchableOpacity`
  padding: 1px;
`;

const QButtonContentContainer = styled.View`
  height: ${qButtonSize}px;
  width: ${qButtonSize}px;
  border-radius: ${qButtonSize}px;
  border: 1px solid #4030a5;
  justify-content: center;
  align-items: center;
`;

const QButtonContent = styled(TextStyled)`
  font-size: 16px;
  font-weight: bold;
  line-height: 25px;
  justify-content: center;
  align-items: center;
  text-align-vertical: center;
`;

const DrinkByWeekContainer = styled.View`
  align-items: center;
  margin-top: ${screenHeight * 0.01}px;
  margin-bottom: ${screenHeight * 0.04}px;
`;

const HelpCount = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const HelpCountCaption = styled(TextStyled)`
  font-size: 11px;
  margin-right: 10px;
`;

const TextSemiBold = styled.Text`
  font-weight: 700;
  margin-left: 10px;
`;

export default Goal;
