//action value
const PlUS_ONE = "counter/PLUS_ONE"
const MINUS_ONE = "counter/MINUS_ONE"
const PLUS_N = "counter/PLUS_N"
const MINUS_N ="counter/MINUS_N"

//action creator : action value를 return하는 함수
export const PlusOne = () => {
  return {
    type: PlUS_ONE,
  }
}

export const minusOne = () =>{
  return{
    type: MINUS_ONE
  }
}
export const plusN = (payload) =>{
  return{
    type:PLUS_N,
    payload: payload
  }
}
export const minusN = (payload) =>{
  return{
    type:MINUS_N,
    payload: payload
  }
}

//초기 상태값(state)
const initialState = {
  number: 0
};



//리듀서 : 'state에 변화를 일으키는'함수
//1. state를 actoin의 type에 따라 변경하는 함수

//input : statedhk action
//action 객체라는 것은 action type을 payload 만큼 처리하는 것이다.
//Ex) payloadrk 3dlek 3만큼을 plus 해라
const counter = (state = initialState, action) => {
  switch(action.type){
    case PlUS_ONE:
      return {
        number: state.number+1
      }
    case MINUS_ONE:
      return{
        number: state.number -1
      }
    case PLUS_N:
      return{
        number: state.number + action.payload
      }
      case MINUS_N:
        return{
          number: state.number - action.payload
        }
    default:
      return state;
  }

}

export default counter;