import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import "./App.css";
// import Home from "./components/home";
// import Movies from "./components/Movies/movies";
import Directors from "./directorsItem";
import AddDirector from "./addDirector.jsx";
import DirectorById from "./directorsId"
// import MovieByRank from "./components/Movies/MovieByRank";

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/* <Route path="/" component={Home} exact /> */}
            {/* <Route path="/movies" component={Movies} /> */}
            {/* <Route path="/movie/:id" component={MovieByRank} /> */}


            <Route path="/directors" component={Directors} />
            <Route path="/director/:id" component={DirectorById} />
            {/* <Route path="/directors/add" component={
              AddDirector  }/> */}

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Header;