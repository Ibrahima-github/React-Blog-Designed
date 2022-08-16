
import React from "react";
import "./App.css";
import Posts  from './pages/Posts';
import Article from "./pages/Article";
import {  Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
 
  return (
    
    
         
          <BrowserRouter>
            
            <Switch>
              <Route path='/' component={Posts} />
              <Route path='/posts/:id' component={Article} />
            </Switch>
          </BrowserRouter> 
          //  <Posts /> 
          /* <Footer /> */
        

        //<footer>
        //   {/* <div className="row">
        //     <Fade bottom>
        //       <div className="twelve columns">


        //         <ul className="copyright">
        //           <li>&copy; Copyright 2021 Ibrahima SALL</li>
        //           <li>
        //           </li>
        //         </ul>
        //       </div>
        //     </Fade>

        //     <div id="go-top">
        //       <a className="smoothscroll" title="Back to Top" href="#home">
        //         <i className="icon-up-open"></i>
        //       </a>
        //     </div>
        //   </div>
        // </footer>  */}
    //   </div>
    // </div>
  );
}

export default App;
>>>>>>> 8468cce97e92334e39c84f263eed2fff5e19f51e
