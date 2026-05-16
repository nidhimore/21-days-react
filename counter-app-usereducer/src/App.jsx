import { useReducer } from "react";
const counterReducer =(state, action) => {
  switch (action.type){
    case 'INCREMENT' : 
    return {count: state.count + 1};
    case 'DECREMENT' :
      return {count : state.count -1};
    default: 
    return state;
  }
}
function App(){
  const [state, dispatch] = useReducer(counterReducer, {count : 0})
  return (
    <div>
      <button onClick={()=> dispatch({type: 'INCREMENT'})}>
Increment
      </button>
      <br />
      <button onClick={()=> dispatch({type: 'DECREMENT'})} >
Decrement
      </button >
      <br />
      <h3>Count : {state.count}</h3>
    </div>
  )
}

export default App;