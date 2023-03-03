//초기 상태값(state)
const initialState = {
  userId: 123,
};



//리듀서 : 'state에 변화를 일으키는'함수
//1. state를 actoin의 type에 따라 변경하는 함수

//input : statedhk action
const users = (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }

}

export default users;