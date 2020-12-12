import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';

const Celender = () => {
  const CelenderWrapper = styled('div')`
    width:100%;
    height: 100vh;
  `;
  const Header = styled('div')`
    background-color: ${(props) => (props.theme.color.red)};
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
    background-color: ${(props) => (props.theme.color.red)};
    color: white;
    display: flex;
    justify-content: space-around;
    & span{
      padding: 10px;
      box-sizing: border-box;
    }
  `;
  const MonthlyCont = styled('div')`
  `;
  const WeekLine = styled('div')`
    display: flex;
    height: calc(80vh/5);
    border-bottom:0.3px solid ${(props) => (props.theme.color.lightGrey)};
  `;
  const DateItem = styled('div')`
    width: calc(100%/7);
    padding: 10px;
    background-color:${(props)=> props.select !== null && props.theme.color.lightGrey};
    color:${(props)=>props.grey !== null && props.theme.color.lightGrey};
    &:first-child strong{
      color: ${(props)=>props.grey !== null ? props.theme.color.lightGrey : props.theme.color.red};
    }
    &:last-child strong{
      color: ${(props)=>props.grey !== null ? props.theme.color.lightGrey : props.theme.color.blue};
    }
  `;
  function generate() {
    const today = moment();
    const startWeek = today.clone().startOf('month').week();
    const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <WeekLine key={week}>
          {
            Array(7).fill(0).map((n, i) => {
              console.log(n,i)
              const current = today.clone().week(week).startOf('week').add(n + i, 'day');
              const isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : null;
              const isGrayed = current.format('MM') === today.format('MM') ? null : 'grayed';
              return (
                <DateItem key={i} grey = {isGrayed} select = {isSelected}>
                  <strong>{current.format('D')}</strong>
                </DateItem>
              );
            })
          }
        </WeekLine>,
      );
    }
    return calendar;
  }
  return (
    <CelenderWrapper>
      <Header>
        <button><ArrowBackIosRounded /></button>
        <span>{moment().format('MMMM YYYY')}</span>
        <button><ArrowForwardIosRounded /></button>
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
        <MonthlyCont>
          {generate()}
        </MonthlyCont>
      </Content>
    </CelenderWrapper>
  );
};

export default Celender;
