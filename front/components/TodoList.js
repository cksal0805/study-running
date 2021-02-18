import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { extendMoment } from 'moment-range';
import styled from 'styled-components';

const TodoListWrapper = styled('div')`
  padding: 20px;
  box-sizing:border-box;
  width:40%;
  display: flex;
  flex-direction:column;
  align-items: center;
`;
const AddTodoWrapper = styled('form')`
  display: flex;
  width: 100%;
`
const Button = styled('button')`
  flex-basis: 2;
  border: 0;
`
const Input = styled('input')`
  width: 100%;
  height: 30px;
  padding: 10px;
  box-sizing:border-box;
`
const List = styled('ul')`
  width: 100%;
`
const ToDoItem = styled('li')`
  padding: 20px 20px;
  font-size:25px;
  background-color:${(props) => props.theme.color[props.color]};
  color: white;
  border-radius: 10px;
`
const TodoList = () => {
  const {event} = useSelector((state) => state.schedule);
  const today = moment();
  const  Moment_range = extendMoment(moment);

  const onTodoEventSubmit = (e) => {
    e.preventDefault();
  }

  return(
  <TodoListWrapper>
    <span>{today.format("MM월 DD일")}</span>
    <h1>TO DO LIST</h1>
    <AddTodoWrapper onSubmit = {onTodoEventSubmit}>
      <Input placeholder="Add todo..">
      </Input>
      <Button type = "submit">ADD</Button>
    </AddTodoWrapper>
    <List>
    {event.map(v => {
      const eventDate = Moment_range().range(v.startDate, v.endDate);
      if(eventDate.contains(today)){
        return(<ToDoItem color = {v.color} key = {v.id}>{v.toDo}</ToDoItem>)
      }
      })}
    </List>
  </TodoListWrapper>
  )
};

export default TodoList;
