
import {Home} from './Home';
import {Posts} from './pages/Posts';
import {Developpement} from './pages/Developpement';
import {Cryptomonnaie} from './pages/Cryptomonnaie';
import {Youtube} from './pages/Youtube';
import {Login} from './pages/Login';

import {Navigation} from './components/Navigation';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <h3 className="d-flex justify-content-center">Bienvenue sur mon blog</h3>
      


      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/posts' component={Posts}/>
        <Route path='/developpement' component={Developpement}/>
        <Route path='/cryptomonnaie' component={Cryptomonnaie}/>
        <Route path='/youtube' component={Youtube}/>
        <Route path='/login' component={Login} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
