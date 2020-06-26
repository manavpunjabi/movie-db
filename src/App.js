import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Movies from "./components/layout/Movies";
import Movie from "./components/layout/Movie";
import AddMovie from "./components/layout/AddMovie";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <section className="container">
          <Search />
          <Switch>
            <Route exact path="/movies/:search" component={Movies} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route exact path="/addmovie" component={AddMovie} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
