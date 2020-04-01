import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Movies from "./components/layout/Movies";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />

        <section className="container">
          <Search />
          <Movies />
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
