import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import BlogScreen from './screens/BlogScreen';
import VideoScreen from './screens/VideoScreen';
import RecipeScreen from './screens/RecipeScreen';
import VideoState from './context/videos/VideoState';

function App() {
  return (
    <VideoState>
      <Router>
        <Switch>
          <Route component={HomeScreen} exact path="/" />
          <Route component={BlogScreen} exact path="/blog" />
          <Route component={VideoScreen} exact path="/video" />
          <Route component={RecipeScreen} exact path="/recipe" />
        </Switch>
      </Router>
    </VideoState>
  );
}

export default App;
