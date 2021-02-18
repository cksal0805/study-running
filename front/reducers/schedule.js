//일정 관리 리듀서
import moment from 'moment';
import produce from 'immer';

export const initialState = {
  event: [
      {id: 0, toDo: '초밥', startDate: moment('2020-12-06', 'YYYY-MM-DD'), endDate: moment('2020-12-07', 'YYYY-MM-DD'), color: 'red'},
      {id: 1, toDo: '고구마', startDate: moment('2021-01-06', 'YYYY-MM-DD'),endDate: moment('2021-01-07', 'YYYY-MM-DD'), color: 'red'},
      {id: 2, toDo: '계란', startDate: moment('2021-01-06', 'YYYY-MM-DD'),endDate: moment('2021-01-06', 'YYYY-MM-DD'), color: 'blue'},
      {id: 3, toDo: '김치', startDate: moment('2020-12-07', 'YYYY-MM-DD'), endDate: moment('2020-12-09', 'YYYY-MM-DD'), color: 'blue'},
      {id: 4, toDo: '초밥', startDate: moment('2020-12-11', 'YYYY-MM-DD'), endDate: moment('2020-12-14', 'YYYY-MM-DD'), color: 'red'},
      {id: 5, toDo: '커피', startDate: moment('2021-01-14', 'YYYY-MM-DD'), endDate: moment('2021-01-16', 'YYYY-MM-DD'), color: 'blue'},
      {id: 6, toDo: '볶음밥', startDate: moment('2020-12-18', 'YYYY-MM-DD'), endDate: moment('2020-12-18', 'YYYY-MM-DD'), color: 'blue'},
      {id: 8, toDo: '연어회', startDate: moment('2020-12-17', 'YYYY-MM-DD'), endDate: moment('2020-12-17', 'YYYY-MM-DD'), color: 'red'},
      {id: 10, toDo: '강아지', startDate: moment('2020-12-19', 'YYYY-MM-DD'), endDate: moment('2020-12-22', 'YYYY-MM-DD'), color: 'blue'},
      {id: 13, toDo: '고양이', startDate: moment('2020-12-08', 'YYYY-MM-DD'), endDate: moment('2020-12-08', 'YYYY-MM-DD'), color: 'red'},
      {id: 5, toDo: '고양이', startDate: moment('2021-01-14', 'YYYY-MM-DD'), endDate: moment('2021-01-16', 'YYYY-MM-DD'), color: 'red'},
    ],
  AddEventLoading: false,
  AddEventDone: false,
  AddEventError: null
};

export const ADD_EVENT_REAUEST = 'ADD_EVENT_REAUEST';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_ERROR = 'ADD_EVENT_ERROR';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch(action.type) {
      case ADD_EVENT_REAUEST:
          draft.AddEventLoading = true;
          break;
      case ADD_EVENT_SUCCESS:
          draft.event.push();
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