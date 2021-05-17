import {CHANGE_NAME} from './action'


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
  default:
    return {
      ...oldState,
    };
}
};

export default ui;