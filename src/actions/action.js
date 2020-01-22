import { getDirectors } from "../reducers/reducer";

// export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
// export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
// export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

// function fetchProductsPending() {
//     return {
//         type: FETCH_PRODUCTS_PENDING
//     }
// }

// function fetchProductsSuccess(products) {
//     return {
//         type: FETCH_PRODUCTS_SUCCESS,
//         products: products,
//     }
// }

// function fetchProductsError(error) {
//     return {
//         type: FETCH_PRODUCTS_ERROR,
//         error: error,
//     }
// }
export const INCREMENT = "INCREMENT";

export const GET = "GET";

export const increaseCount = () => {
  return {
    type: INCREMENT,
    payload: 1
  };
};

export const getAllDirectors =  () => {
  fetch("http://localhost:8080/api/directors")
    .then(result => result.json())
    .then(directorsData => {
//   console.log(directorsData)
  return {
    type: GET,
    payload: directorsData
  };
}
  )
};

// const fetchDirectors = () => {
//     const url = `http://localhost:8080/api/directors`;
//      fetch(url, {
//       method: "GET"
//     })
//       .then(res => res.json())
//       .then(result=>
//     {return result})
//       .catch(error => {
//         console.log(error);
//       });
// }

