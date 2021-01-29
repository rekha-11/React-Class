import React, {useState} from 'react'
import './App.css';
import Tweet from './Tweet'

export default function App() {
  const [users, setUsers] = useState([
    {name: 'Rekha', message: 'Hey Rekha!'},
    {name: 'Sushma', message: 'Good Morning'},
    {name: 'Prabhu', message: 'Vaag'}
  ]);
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count+1);
  //   setRed(!isRed);
  // }

return (
  <div className='App'>
    {users.map(user => (
      <Tweet name = {user.name} message = {user.message}/>
    ))}

    {/* <h1 className= {isRed ? 'red':''}>Change my Color.</h1>
    <button onClick={increment}>Increment</button>
    <h1>{count}</h1>
    // <Tweet name='Rekha' message = 'This is Rekha Tweet' />
    // <Tweet name='Rima' message = 'This is Rima Tweet' />
    // <Tweet name='Rubina' message = 'This is Rubina Tweet' /> */}
  </div>
);
}



















// import './App.css'
// import Navbar from './Navbar'
// import Contact from './Component2/Contact';
// import About from './Component2/About';
// import Shop from './Component2/Shop';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// export default class App extends Component {
//   render() {
//     return (
//       <Router>
//       <div className='App'>
//         <Navbar/>
//         <Switch>
//           <Route path='/' exact component={Home}/>
//           <Route path='/contact' component={Contact}/>
//           <Route path='/about' component={About}/>
//           <Route path='/shop' component={Shop}/>
//         </Switch>
//       </div>
//       </Router>
//     )
//   }
// }

// const Home = () => (
//   <div>
//     <h1>Home</h1>
//   </div>
// )

