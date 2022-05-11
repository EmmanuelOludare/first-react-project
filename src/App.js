import React, {useState} from 'react'
import Tweet from './Tweet'

const App = () => {
/* const say = () => {
  console.log('Hello world');
};
const sayText = 'Say'; */
  /* const [isRed,setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  } */
  
  const [users, setUsers] = useState([
    { name:'Mike', message:'Hello there!!' },
    { name:'James', message:'Hi!' },
    { name:'Ayo', message:'Hey!'}
  ]);
 
  return (
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App

/* <Tweet name='mike olud' message='Hello world'/>
      <Tweet name='mike oluda' message='Hello aliens' />
      <Tweet name='mike oludar' message='Hello peeps' />
      <Tweet name='mike oludare' message='Hello bitches' /> */

      /* <h1 className={isRed ? 'red': ''}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */