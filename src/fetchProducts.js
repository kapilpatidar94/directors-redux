// import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from 'actions';
import { getAllDirectors } from './actions/action'
export const fetchProducts= () => {
    // return dispatch => {
    //     // dispatch(fetchProductsPending());
    //     fetch('http://localhost:8080/api/directors')
    //     .then(res => res.json())
    //     .then(res => {
    //         if(res.error) {
    //             throw(res.error);
    //         }
    //         console.log(res);
    //         dispatch(getAllDirectors(res))
    //         // return res.products;
    //     })
    //     .catch(error => {
    //         // dispatch(fetchProductsError(error));
    //     })
    // }
    
   return (dispatch) =>{ 
       dispatch();
       return fetch('http://localhost:8080/api/directors')
      .then(result => result.json())
      .then(directorsData => {
        console.log(directorsData)
        dispatch(getAllDirectors(directorsData))
      });
    }
}

// fetchProducts();