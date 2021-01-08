import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { extendMoment } from 'moment-range';

const BarWrapper = styled('div')`
  margin-top: 30px;
  flex: 1 1 0%;
`;
const Bar = styled('div')`
  display:flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  font-size: 13px; 
  color: #fff;
`;
const BarItem = styled('div')`
  flex: 1 1 0%;
  border-right: 1px solid transparent;
`;
const ScheduleItem = styled('div')`
  margin-bottom: 1px;
  height: 1rem;
  
`;
const Item = styled('div')`
  border-radius : 3px;
  box-sizing:border-box;
  padding-left:2px;
  height:1rem;
  background-color: ${(props) => (props.color ? props.theme.color[props.color] : props.theme.color.blue)};
  width: ${(props)=> props.eventTerm !== 0 ? props.eventTerm * 100 : 100}%;
`

const ScheduleBar = ({ event, week }) => {
  const currentEvent = [];
  const  Moment_range = extendMoment(moment);
  return (
    <BarWrapper>
      <Bar>
      {
        Array(7).fill(0).map((n, i) => {
          const current = week.startOf('week').add(n + i, 'day');
          console.log(current);
          event.map((v) => (
            v.startDate.format('YYYY-MM-DD') === current.format('YYYY-MM-DD') && currentEvent.push(v))
          )
          return(
          <BarItem key = {i}>
            {currentEvent.map((v) => {
              const eventTerm = moment.duration(v.endDate.diff(v.startDate)).asDays()+1;
              const eventDate = Moment_range().range(v.startDate, v.endDate);
              
              return(
              eventDate.contains(current) && 
              <ScheduleItem key = {v.id} >
                {v.startDate.format('YYYY-MM-DD') === current.format('YYYY-MM-DD') &&
                <Item color = {v.color} eventTerm = {eventTerm}>{v.toDo}</Item>}
              </ScheduleItem>
              )
            })}
          </BarItem>
          )
        })
      }
      </Bar>
    </BarWrapper>
  )
}

export default ScheduleBar;
