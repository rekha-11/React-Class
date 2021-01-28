import React from 'react'
import './App.css';
import Tweet from './Tweet'

export default function App() {
return (
  <div className='App'>
    <Tweet/>
    <Tweet/>
    <Tweet/>
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

