import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      {/* <Route path="/about" component={About} />
      <Route path="/info" component={About} /> */}
      <Route path={['/about', '/info']} component={About} />
    </div>
  )
}

export default App;