//일정 관리 리듀서
import moment from 'moment';

export const initialState = {
  event: [
      {id: 1, toDo: '책읽기', startDate: moment('2020-12-06', 'YYYY-MM-DD'),endDate: moment('2020-12-07', 'YYYY-MM-DD'), color: 'red'},
      {id: 2, toDo: '알고리즘 풀기', startDate: moment('2020-12-06', 'YYYY-MM-DD'),endDate: moment('2020-12-06', 'YYYY-MM-DD'), color: 'blue'},
      {id: 3, toDo: 'CS', startDate: moment('2020-12-07', 'YYYY-MM-DD'), endDate: moment('2020-12-09', 'YYYY-MM-DD'), color: 'blue'},
      {id: 4, toDo: '책읽기', startDate: moment('2020-12-12', 'YYYY-MM-DD'), endDate: moment('2020-12-13', 'YYYY-MM-DD'), color: 'red'},
      {id: 5, toDo: '윤자이랑 독서실', startDate: moment('2020-12-14', 'YYYY-MM-DD'), endDate: moment('2020-12-15', 'YYYY-MM-DD'), color: 'blue'},
      {id: 6, toDo: '윤자이랑 맛집', startDate: moment('2020-12-18', 'YYYY-MM-DD'), endDate: moment('2020-12-18', 'YYYY-MM-DD'), color: 'blue'},
      {id: 7, toDo: '커밋 : 3', startDate: moment('2020-12-17', 'YYYY-MM-DD'), endDate: moment('2020-12-19', 'YYYY-MM-DD'), color: 'red'},
      {id: 8, toDo: '밥먹기', startDate: moment('2020-12-17', 'YYYY-MM-DD'), endDate: moment('2020-12-17', 'YYYY-MM-DD'), color: 'blue'},
      {id: 9, toDo: '커밋 : 2', startDate: moment('2020-12-19', 'YYYY-MM-DD'), endDate: moment('2020-12-19', 'YYYY-MM-DD'), color: 'red'},
      {id: 10, toDo: '알고리즘 풀기', startDate: moment('2020-12-19', 'YYYY-MM-DD'), endDate: moment('2020-12-19', 'YYYY-MM-DD'), color: 'blue'},
      {id: 11, toDo: '알고리즘 풀기', startDate: moment('2020-12-26', 'YYYY-MM-DD'), endDate: moment('2020-12-26', 'YYYY-MM-DD'), color: 'blue'},
    ],
  AddEventLoading: false,
  AddEventDone: false,
  AddEventError: null
};

export const ADD_EVENT_REAUEST = 'ADD_EVENT_REAUEST';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_ERROR = 'ADD_EVENT_ERROR';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_EVENT_REAUEST:
      return {
        ...state,
        AddEventLoading: true,

      };
    case ADD_EVENT_SUCCESS:
      return {
        ...state,
        event: [...state.event, {id: 9, toDo: '밥먹기', startDate: moment('2020-12-19', 'YYYY-MM-DD'), color: 'blue'}],
        AddEventDone: true, 
      };
    case ADD_EVENT_ERROR:
      return {
        ...state,
        AddEventError: true,
      };
    default:
      return {
        ...state,
      };
  }
}

export default reducer;