import React, {useState} from 'react';
function App() {
  const initialCount = 0;
const [count, setCount] = useState(initialCount)

const resetCount = () => {
  setCount(initialCount)
}
const decreaseCount = () => {
  if(count > 0){
    setCount(count -1)
  }
  if(count === 0){
    alert('Count set to Initial value! Can\'t count below 0 ')
  }
}
  return (
    
  <div className='App'>
   <div className='button'>
    <button className="counter" onClick= {
          () => setCount(count + 1)
          }>Increase</button>
    <button className="counter" onClick={decreaseCount}>Decrease</button>
    <button className="counter" onClick={resetCount}>Restart</button>
  </div> 
<h2>Count:{count}</h2>
  </div>
  );
}
export default App;