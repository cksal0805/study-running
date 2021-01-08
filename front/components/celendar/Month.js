import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import ScheduleBar from './ScheduleBar';
import Modal from './Modal';

const MonthlyCont = styled('div')`
`;
const WeekLine = styled('div')`
  position: relative;
  overflow: hidden;
  height: calc(80vh/5);
  border: 0.3px solid ${(props) => props.theme.color.lightGrey};
`;
const DateItemWrapper = styled('div')`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  `;
const DateItem = styled('div')`
  flex: 1 1 0%;
  padding: 10px;
  box-sizing: border-box;
  background-color:${(props) => props.isToday && props.theme.color.lightBlue || props.select && props.theme.color.lightGrey};
  color:${(props)=>props.grey && props.theme.color.lightGrey};
  &:first-child strong{
    color: ${(props)=>props.grey ? props.theme.color.lightGrey : props.theme.color.red};
  }
  &:last-child strong{
    color: ${(props)=>props.grey ? props.theme.color.lightGrey : props.theme.color.blue};
  }
`;

const Month = ({currentMonth}) => {
  
  const {event} = useSelector((state) => state.schedule);

  const [selectDate,setSelectDate] = useState(moment());
  const [isModalOpend,setIsModalOpened] = useState(false);

  const onChangeSelectDate = useCallback((current)=>{
    setSelectDate(current);
    setIsModalOpened(true);
  },[selectDate,isModalOpend]);

  const onModalClose = useCallback(()=>{
    setIsModalOpened(false);
  },[isModalOpend]);
  
  function paintiangMonth() {
    const today = moment();
    const startWeek = currentMonth.clone().startOf('month').week();
    const endWeek = currentMonth.clone().endOf('month').week() === 1 ? 53 : currentMonth.clone().endOf('month').week();
    const calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <WeekLine key={week}>
          <DateItemWrapper>
          {
            Array(7).fill(0).map((n, i) => {
              const current = currentMonth.clone().week(week).startOf('week').add(n + i, 'day');
              const isToday = today.format('YYYYMMDD') === current.format('YYYYMMDD') && true;
              const isGrayed = current.format('MM') === currentMonth.format('MM') ? false : true;
              return (
                <DateItem key = {i} grey = {isGrayed} isToday = {isToday} onClick = {()=>{onChangeSelectDate(current)}}> 
                  <strong>{current.format('D')}</strong>
                </DateItem>
              );
            })
          }
          </DateItemWrapper>
          <ScheduleBar week= {currentMonth.clone().week(week)} event = {event}/>
        </WeekLine>
      );
    }
    return calendar;
  }
  return(
    <MonthlyCont>
        {paintiangMonth()}
        {isModalOpend && <Modal onModalClose = {onModalClose} selectDate = {selectDate}/>}
    </MonthlyCont>
  )
}

export default Month;
