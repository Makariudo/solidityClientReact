
import { SET_MIND } from './action';

const interactMW = store => next => async action => {
  
  switch (action.type) {
    /*******************************/
    /*SET MIND /
    /*******************************/
    case SET_MIND: { 
      const {drizzle}  = action
      const contract = drizzle.contracts.MindPin
      const ref = await contract.methods["writeState"].cacheSend(action.payload) 
      console.log("ref", ref)
      next(action)
      break;
    }
    default:
      next(action);
  }
}
  export default interactMW