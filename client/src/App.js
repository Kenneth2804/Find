import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Formulario from './components/Formulario';
import Details from './components/Details';


function App() {

  return (
  <BrowserRouter>
    <div className='App'>
 
  <Switch>

  <Route path={'/'}  exact component={Home}/>
  <Route path={'/formulario'}  exact component={Formulario}/>
  <Route path={'/details'}  exact component={Details}/>

  </Switch>
 
  
  </div>
  </BrowserRouter>
  );

}

export default App;