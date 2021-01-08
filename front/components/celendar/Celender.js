import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';
import Month from './Month';

const CelenderWrapper = styled('div')`
  width:100%;
  height: 100vh;
`;
const Header = styled('div')`
  background-color: ${(props) => props.theme.color.red};
  color: white;
  font-size: 30px;
  text-align: center;
  padding: 20px; 
  font-weight: normal;
  & span{
    padding: 20px;
    box-sizing: border-box;
  }
  & button{
    background-color: inherit;
    border: 0;
    color: inherit;
  }
`;
const Content = styled('div')`
`;
const MonthlyTop = styled('div')`
  background-color: ${(props) => props.theme.color.red};
  color: white;
  display: flex;
  justify-content: space-around;
  & span{
    padding: 10px;
    box-sizing: border-box;
  }
`;


const Celender = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());

  const onClickPrevMonth = useCallback(() => {
    setCurrentMonth(currentMonth.clone().subtract(1, 'month').startOf('month'));
  },[currentMonth]);
  const onClickNextMonth = useCallback(() => {
    setCurrentMonth(currentMonth.clone().add(1, 'month').startOf('month'));
  },[currentMonth]);

  return (
    <CelenderWrapper>
      <Header> 
        <button onClick={onClickPrevMonth}><ArrowBackIosRounded /></button>
        <span>{currentMonth.format('MMMM YYYY')}</span>
        <button onClick={onClickNextMonth}><ArrowForwardIosRounded /></button>
      </Header>
      <Content>
        <MonthlyTop>
          <span>SUN</span>
          <span>MUN</span>
          <span>THE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
          <span>SAT</span>
        </MonthlyTop>
        <Month currentMonth = {currentMonth}/>
      </Content>
    </CelenderWrapper>
  );
};

export default Celender;
