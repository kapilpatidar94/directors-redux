import React, { Component } from "react";
import { deleteDirectors, getAllDirectors } from "../actions/action";
// import EditDirector from "./editDirectors";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import DirectorById from "./directorsId";
import { connect } from "react-redux";
class DirectorsItem extends Component {
  componentDidMount() {
    getAllDirectors();
  }

  deleteCall = event => {
    // event.preventDefault();
    const id = event.target.parentElement.parentElement.getAttribute("position");
    deleteDirectors(id);
    getAllDirectors()
  }
// asynchronus = (data) =>{
//   return  data;
// }

  render() {
    let data = this.props.directors !== undefined ? this.props.directors : [];
    console.log(data.length);
    return (
      <BrowserRouter>
        <div className="directors-container">
          {data.map((data, index) => (
            <div key={index} className="lists" position={data.id}>
              <div>

                <Link to={`/directors/${data.id}`}>

                  <div>
                    <b>Id</b>: {data.id}
                  </div>
                </Link>
                <div>
                  <b>Director Name</b>: {data.director_name}
                </div>
                <Switch>
                  <Route path={`/directors/${data.id}`} component={() => (<DirectorById id={data.id} />)} />
                </Switch>
              </div>
              <div className="buttons">
                <Link to={`/director/${data.id}/edit`}>
                  <button className="edit" onClick={this.props.onEdit}>
                    Edit
                </button>
                </Link>
                <Switch>
                  {/* <Route
                    path="/directors/:id/edit"
                  component={() => (
                    <EditDirector
                      record={this.props.records}
                      onEditItem={this.props.onEditItem}
                      DirId={data.id}
                    />
                  )}
                  /> */}

                </Switch>
                <button className="delete" onClick={this.deleteCall}>
                  Delete
              </button>
              </div>
            </div>
          ))}
        </div>
      </BrowserRouter>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     directors: state.directors
//   };
// };

// const mapDispatchToProps = {

// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DirectorsItem);

export default DirectorsItem;