//일정 관리 리듀서
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import produce from 'immer';

export const initialState = {
  event: [
      {id: uuidv4(), toDo: '고양이', startDate: moment('2021-03-23', 'YYYY-MM-DD'), endDate: moment('2021-03-25', 'YYYY-MM-DD'), color: 'red', eventOrder: 1},
      {id: uuidv4(), toDo: '강아지', startDate: moment('2021-03-24', 'YYYY-MM-DD'), endDate: moment('2021-03-27', 'YYYY-MM-DD'), color: 'blue', eventOrder: 2},
      {id: uuidv4(), toDo: '강아지', startDate: moment('2021-03-23', 'YYYY-MM-DD'), endDate: moment('2021-03-24', 'YYYY-MM-DD'), color: 'blue', eventOrder: 3},
    ],
  AddEventLoading: false,
  AddEventDone: false,
  AddEventError: null
};

// action type
export const ADD_EVENT_REQUEST = 'ADD_EVENT_REQUEST';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_ERROR = 'ADD_EVENT_ERROR';

// action
export const addEventRequest = (data) => ({
  type: ADD_EVENT_REQUEST,
  data
})

// dummy
const dummySchedule = (data) => ({
  id: uuidv4(),
  toDo: data.todo,
  startDate: data.startDate,
  endDate: data.endDate,
  color: data.color
})
// reducer
const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch(action.type) {
      case ADD_EVENT_REQUEST:
          draft.AddEventLoading = true;
          break;
      case ADD_EVENT_SUCCESS:
          draft.event.push(dummySchedule(action.data));
          draft.AddEventDone = true;
          break;
      case ADD_EVENT_ERROR:
          draft.AddEventError = true;
          break;
      default:
        break;
    }
  })
  
}

export default reducer;