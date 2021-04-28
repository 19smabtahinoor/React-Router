import './App.css';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Navbar from './Navbar'
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route component={Error}/>
    </Switch>

    </>
  );
}

export default App;
