import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { extendMoment } from 'moment-range';

const BarWrapper = styled('div')`
  flex: 1 1 0%;
`;
const Bar = styled('div')`
  font-size: 12px; 
  line-height: 24px;
  color: #fff;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const BarItem = styled('div')`
  flex: 1 1 0%;
  margin-top: 30px;
`
const ScheduleItem = styled('div')`
  margin: 0px 3px 0px 3px;
  flex: 1 1 0%;
  height: 1.7rem;

`;
const Item = styled('div')`
  border-radius : 3px;
  box-sizing:border-box;
  padding-left:2px;
  background-color: ${(props) => (props.color ? props.theme.color[props.color] : props.theme.color.blue)};
  margin-bottom: 2px;
  width: ${(props)=> props.eventTerm !== 0 ? props.eventTerm * 100: 100}%;
`

const ScheduleBar = ({ event,week }) => {
  const  Moment_range = extendMoment(moment);
  return (
    <BarWrapper>
      <Bar>
      {Array(7).fill(0).map((n,i) => {
      const currentDate = week.startOf('week').add(n + i, 'day')
       return( 
        
          <BarItem key = {i}>
            {event.map((v) => {
              const eventTerm = moment.duration(v.endDate.diff(v.startDate)).asDays()+1;
              const eventTerm2 = moment.duration(v.endDate.diff(currentDate)).asDays()+1;
              const eventDate = Moment_range().range(v.startDate, v.endDate);
              const isSunDay = currentDate.day() === 0;
              const isSatDay = currentDate.day() === 6;
              const isStartDay = currentDate.format('YYYY-MM-DD') === v.startDate.format('YYYY-MM-DD');
              return(
              (eventDate.contains(currentDate)) &&
              <ScheduleItem>
                {(isStartDay || (eventDate.contains(currentDate) && isSunDay)) &&
                <Item key = {v.id} color = {v.color} eventTerm = {eventTerm} top = {1}>{v.toDo}</Item>
                }
              </ScheduleItem>
              )
            })}
            
          </BarItem>
        
        )
       
      })} 
      </Bar>
    </BarWrapper>
  )
}

export default ScheduleBar;
{/* eventDate.contains(currentDate) && */}