import { drizzleReactHooks} from '@drizzle/react-plugin';
function Feed() {
  const { useDrizzleState} = drizzleReactHooks;
  const minds = useDrizzleState(state => (state.appStore.ui.Minds))
  console.log(minds)
  return (
    <div>
      <h1>Feed</h1>
      {minds.map(mind => (
        <div className="textBox" key={mind.id} id={mind.id}> 
          <p className="textBox__id">Mind num : {mind.id}</p>
          <p className="textBox__owner">De : {mind.owner}</p>
          <p className="textBox__content">{mind.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
