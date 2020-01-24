import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import DirectorsItem from "./directorsItem";
import { addDirector } from "../actions/action"
import { connect } from "react-redux";



class AddDirector extends Component {



  passValue = (event) => {
    event.preventDefault();
    let name = event.target[0].value;
    const obj = {
      director_name: name,
    }
    this.props.addDirector(obj);

  }

  render() {

    return (
      <BrowserRouter>
        <div className="popup-add-container">
          <div className="popup">

            <Link to="/directors"><div class="left">Go Back</div></Link>

            <h3>Add New Director</h3>
            <div className="add-form">
              <div>Director Name</div>
              <form onSubmit={this.passValue}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Director Name..."
                  onChange={this.takeInput}
                  required />
                <button type="submit"
                  value="submit">
                  Submit
          </button>
              </form>
            </div>




          </div>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    directors: state.directors
  };
};

const mapDispatchToProps = {
  addDirector
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDirector);