import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllDirectors, addDirector } from "../actions/action";
import DirectorsItems from "./directorsItem";
import Header from "./header";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AddDirector from "./addDirector.jsx";
class MainComponent extends React.Component {
 async  componentDidMount() {
   await getAllDirectors();
  }

  render() {
    const { directorsData, getAllDirectors } = this.props;
    console.log(directorsData);
    return (
      <BrowserRouter>
        <div id="main">
          <Header />
          <Link to="/directors">
            <button onClick={getAllDirectors}>Directors</button>
          </Link>
          <Link to="/directors/add">
            <button>Add Director</button>
          </Link>
          <Switch>
            <Route
              path="/directors"
              exact
              component={() => (
                < DirectorsItems directors={directorsData} refresh={getAllDirectors} />
              )}
            />
          </Switch>

          <Switch>
            <Route
              path="/directors/add"
              component={() => (
                <AddDirector addDirector={this.props.addDirector} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    directorsData: state.directorsData
  };
};

const mapDispatchToProps = {
  getAllDirectors
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
