import {Switch,Route} from 'react-router-dom'
import "./App.css";
import Home from './components/Home';
import MyProfile from './components/MyProfile'



const App = () => {
  
  return (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/profile' component={MyProfile}/>
    </Switch>
     
  );
};

export default App;
