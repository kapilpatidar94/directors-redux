import { put, takeLatest, all, fork } from "redux-saga/effects";

let json;

function* getAllDirectors(event) {
  const url = "http://localhost:8080/api/directors";

  json = yield fetch(url, {
    method: "GET"
  }).then(res => res.json());

  yield put({ type: "GET", json });
}

// function* insertDirector(newData) {
//   const urlPost = "http://localhost:8080/api/directors";
//   const response = yield fetch(urlPost, {
//     method: "POST",
//     header: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       name: newData.director_name
//     })
//   });
// }

function* addDirector(data) {
  console.log(data.data);
  const url = "http://localhost:8080/api/directors";

  yield fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data.data)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
  // console.log(json);
  // .then(data => alert("Director added at:" + data));
}


function* editDirector(data) {
  // console.log(data.id)
  // console.log(data.data)
  const url = "http://localhost:8080/directors/" + data.id + "/edit";
  
  const json=yield fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data.data)
  });
};



// ******************WATCHERs************************

function* actionGetWatcher() {
  yield takeLatest("getAll", getAllDirectors);
  // yield takeLatest('delete', deleteDirector)
}

// function* addNewData() {
//   yield takeLatest("update", insertDirector);
// }

function* actionAddWatcher() {
  yield takeLatest("addOne", addDirector);
}

function* actionEditWatcher() {
  yield takeLatest("editOne", editDirector);
}
// **************ROOT***************************
export default function* rootSaga() {
  yield all([
    fork(actionGetWatcher),
    fork(actionAddWatcher),
    fork(actionEditWatcher)
  ]);
}
