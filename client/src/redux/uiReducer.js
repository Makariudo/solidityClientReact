import {CHANGE_NAME, SEED_COUNTER, SEED_ALL_ENTRIES} from './action'


export const initialState = {
  name: "toto",
  age: 38,
  nbMinds: null,
  Minds: null,
}

const ui = (oldState= initialState, action) => {
switch (action.type) {
  case CHANGE_NAME : 
    return {
      ...oldState,
      name: action.payload
    }
  case SEED_COUNTER : 
    return {
      ...oldState,
      nbMinds: action.payload
    }
  case SEED_ALL_ENTRIES : {
    if(!oldState.Minds){
      return {
        ...oldState,
        Minds: [...action.payload]
      }
    } else {
      return {
      ...oldState,
      Minds: [...oldState.Minds, ...action.payload]
    }
    }
  }
    
  default:
    return {
      ...oldState,
    };
}
};

export default ui;