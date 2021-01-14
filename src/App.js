import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import BlogScreen from './screens/BlogScreen';
import VideoScreen from './screens/VideoScreen';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route component={HomeScreen} exact path="/" />
          <Route component={BlogScreen} exact path="/blog" />
          <Route component={VideoScreen} exact path="/video" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
