import { useState, useEffect, useCallback } from 'react'; 
import { drizzleReactHooks} from '@drizzle/react-plugin';
import { setMind } from '../../redux/action';

function MyMind() {
  const { useDrizzle, useDrizzleState } = drizzleReactHooks;
  const { drizzle } = useDrizzle();
  const [input, setInput] = useState('Rentrez votre mindset...!');
  const drizzleState = useDrizzleState(state => ({...state}))

  const handleChange = (event) => {
    setInput(event.target.value)
  }
  const handleSubmit = () => {
    drizzle.store.dispatch(setMind(input, drizzle))
  }
///test1
/*   const subscribeData = useCallback(async () => {
    //recup de la clé d'abonnement
   const dataKey = await drizzle.contracts.MindPin.methods.NumStates.cacheCall(1);
   console.log("dataKey", dataKey)
    //recup de la value
   const data = await drizzleState.contracts.MindPin.NumStates[dataKey].value;
   console.log('data', data)
 },[drizzleState, drizzle.contracts.MindPin.methods.NumStates])

useEffect(() => {
subscribeData();
}, [subscribeData]);  */

///test2
const subscribeAddressEntries = useCallback(async () => {
  //recup de la clé d'abonnement
  console.log(drizzleState.accounts[0])
 const dataKey = await drizzle.contracts.MindPin.methods.AddressEntries.cacheCall(drizzleState.accounts[0]);
 console.log("dataKey", dataKey)
  //recup de la value
 const data = await drizzleState.contracts.MindPin.AddressEntries[dataKey].value;
 console.log('data', data)
},[drizzleState.contracts.MindPin.AddressEntries])

useEffect(() => {
  subscribeAddressEntries();
  }, [subscribeAddressEntries]); 


  

  return (
    <div>
      <h1>MyMind</h1>
      <input type='text' value={input} onChange={handleChange}></input>
      <button onClick={handleSubmit}>Click to submit</button>
      
    </div>
  );
}

export default MyMind;
