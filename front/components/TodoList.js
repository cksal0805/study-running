import React from 'react';
import Image from 'next/image'
import { useSelector } from 'react-redux';
import moment from 'moment';
import { extendMoment } from 'moment-range';
import styled from 'styled-components';

const TodoListLayout = styled.div`
  padding: 20px;
  box-sizing:border-box;
  width:40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D65353;
`;
const TodoListWrapper = styled.div`
  width: 90%;
  border: 1px solid white;
  padding: 20px;
  box-sizing:border-box;
  border-radius: 20px;
  min-height: 80%;
  color: white;
`;
const AddTodoWrapper = styled('form')`
  display: flex;
  width: 100%;
`
const Button = styled.button`
  flex-basis: 2;
  border: 0;
  background-color: inherit;
`
const Input = styled.input`
  width: 90%;
  height: 30px;
  padding: 10px;
  box-sizing:border-box;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid white;
  border-radius: 2px;
  color: white;
`
const List = styled.ul`
  width: 100%;
`
const ToDoItem = styled.li`
  padding: 10px;
  font-size:20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:${(props) => props.theme.color[props.color]};
  color: white;
  border-radius: 10px;
  margin-bottom: 5px;
  border: 1px solid white;
`
const TodoList = () => {
  const {event} = useSelector((state) => state.schedule);
  const today = moment();
  const  Moment_range = extendMoment(moment);
  const onTodoEventSubmit = (e) => {
    e.preventDefault();
  }

  return(
  <TodoListLayout>
    <TodoListWrapper>
      <span>{today.format("MM월 DD일")}</span>
      <h2>오늘 당신의 하루</h2>
      <AddTodoWrapper onSubmit = {onTodoEventSubmit}>
        <Input placeholder="나는 오늘..">
        </Input>
        <Button type = "submit">
          <Image src="/images/icons/pencil.png" alt="" width="30" height="30"/>
        </Button>
      </AddTodoWrapper>
      <List>
      {event.map(v => {
        const eventDate = Moment_range().range(v.startDate, v.endDate);
        console.log(today);
        if(eventDate.contains(today, { exclusive: false })){
          console.log(today);
          return(
            <ToDoItem color = {v.color} key = {v.id}>
              <span>{v.toDo}</span>
              <Image src="/images/icons/delete.png" alt="" width="30" height="30"/>
            </ToDoItem>
          )
        }
        })}
      </List>
    </TodoListWrapper>
  </TodoListLayout>
  )
};

export default TodoList;
