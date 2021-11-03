import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ListView from './views/List';
import HomeView from './views/Home';
import NewBeerView from './views/NewBeer';
import DetailView from './views/DetailBeer';
import RandomView from './views/RandomBeer';
import SearchListView from './views/SearchList';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Switch>
        <Route path="/beers" component={ListView} exact />
        <Route path="/random-beer" component={RandomView} exact />
        <Route path="/new-beer" component={NewBeerView} exact />
        <Route path="/" component={HomeView} exact />
        <Route path="/:search" component={SearchListView} exact />
        <Route path="/beer/:name" component={DetailView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
