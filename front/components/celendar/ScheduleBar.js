import React from 'react';
import styled from 'styled-components';

const ScheduleBar = ({ current, event }) => {
  const Bar = styled('div')`
  `;
  const BarItem = styled('div')`
   background-color: ${(props)=>props.theme.color.blue};
   padding: 5px;
   color: white;
   font-size:10px;
   border-radius:2px;
   margin-bottom: 2px;
  `;
  return (
    <Bar>
      {
        event.map((v,i)=>(
          v.startDate.format('YYYY-MM-DD') === current && <BarItem key = {`${current}_${i}`} color = {v.color}>{v.toDo}</BarItem>
        ))
      }
    </Bar>
  )
}

export default ScheduleBar;
