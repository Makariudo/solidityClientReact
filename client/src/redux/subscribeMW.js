
import { SUBSCRIBE_ALL_ENTRIES, seedAllEntries, seedCounter, fetchAllEntries, FETCH_ALL_ENTRIES } from './action';

const subscribeMW = store => next => async action => {
  
  switch (action.type) {
    /*******************************/
    /*SET MIND /
    /*******************************/
    case SUBSCRIBE_ALL_ENTRIES: { 
      const state = store.getState();
      const nbMinds = state.appStore.ui.nbminds ?? 0;
      const {drizzle}  = action;
      const contract = drizzle.contracts.MindPin;
      const dataKeyNbEntries = await contract.methods.counter.cacheCall();
      const data = await state.contracts.MindPin?.counter[dataKeyNbEntries]?.value;
      if(data !== nbMinds){
        console.log('nbMinds init:', nbMinds);
        console.log('nbMinds new:', data);
        store.dispatch(seedCounter(parseInt(data, 10)));
        store.dispatch(fetchAllEntries(nbMinds,data, drizzle))
      }
      next(action)
      break;
    }
     /*******************************/
    /*FETCH ALL MIND /
    /*******************************/
    case FETCH_ALL_ENTRIES: {
      const state = store.getState(); 
      const {oldNb, newNb} = action.payload;
      const {drizzle}  = action;
      let res = [];
      const numberFetch = newNb-oldNb;
      const contract = drizzle.contracts.MindPin;
      for(let i=oldNb+1; i<= numberFetch; i++){
        const dataKeyNbEntries = await contract.methods.NumStates.cacheCall(i);
        const data = await state.contracts.MindPin?.NumStates[dataKeyNbEntries]?.value;
        if(data){
          res = [...res, data]
        }
      }
      console.log('tableau de sortie', res);
      res.length>=1 && store.dispatch(seedAllEntries(res));
      next(action)
      break;
    }
    default:
      next(action);
  }
}
  export default subscribeMW