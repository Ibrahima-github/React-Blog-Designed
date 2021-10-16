
import {Home} from './Home';
import {Posts} from './pages/Posts';
import {Developpement} from './pages/Developpement';
import {Cryptomonnaie} from './pages/Cryptomonnaie';
import {Youtube} from './pages/Youtube';
import {Connexion} from './pages/Connexion';

import {Navigation} from './Navigation';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d'flex justify-content-left">Bienvenue sur mon blog</h3>
      

      <Navigation />

      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/posts' component={Posts}/>
        <Route path='/developpement' component={Developpement}/>
        <Route path='/cryptomonnaie' component={Cryptomonnaie}/>
        <Route path='/youtube' component={Youtube}/>
        <Route path='/connexion' component={Connexion} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
