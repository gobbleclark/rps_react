import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from './components/NavBar';
import {Container,} from 'semantic-ui-react';
// import OptionBox from './components/OptionBox';
// import rock from "./images/rock-icon-grey.png";
// import scissors from './images/scissors-icon-grey.png';
// import paper from './images/download.jpeg';

const App = () => (
   
  <>
  <Container>
  <Navbar />
   <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/about' component={About} />
       <Route component={NoMatch} />
     </Switch>
   </Container>
  </>
   );

export default App;
