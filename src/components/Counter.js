// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import fetchProducts from '../fetchProducts';
// import {getProductsError, getProducts, getProductsPending} from 'reducer';

// // import LoadingSpinner from './SomeLoadingSpinner';
// // // import ProductList from './ProductList';

// class ProductView extends Component {
//     constructor(props) {
//         super(props);

//         this.shouldComponentRender = this.shouldComponentRender.bind(this);
//     }

//     componentWillMount() {
//         const {fetchProducts} = this.props;
//         fetchProducts();
//     }

//     shouldComponentRender() {
//         const {pending} = this.props;
//         if(this.pending === false) return false;
//         // more tests
//         return true;
//     }

//     render() {
//         const {products, error, pending} = this.props;

//         // if(!this.shouldComponentRender()) return <LoadingSpinner />

//         return (
//             <div className='product-list-wrapper'>
//                 {error && <span className='product-list-error'>{error}</span>}
//                 {/* <ProductList products={products} /> */}
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     error: getProductsError(state),
//     products: getProducts(state),
//     pending: getProductsPending(state)
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchProducts: fetchProducts
// }, dispatch)

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ProductView );

import React from "react";
import { connect } from "react-redux";
import { increaseCount, getAllDirectors } from "../actions/action";
import { fetchProducts } from "../fetchProducts";

class MainComponent extends React.Component {
  componentDidMount() {
      getAllDirectors();
  }

  render() {
    const { count, increaseCount, getAllDirectors } = this.props;
    console.log(this.props);
    return (
      <div id="main">
        {/* <div id="wrapper">
          <button id="minus" onClick={decreaseCount}>
            -
          </button>
          <input value={count} disabled />
          <button id="plus" onClick={increaseCount}>
            +
          </button>
          <br />
          <button id="reset" onClick={resetCount}>
            RESET
          </button>
        </div> */}

        <button onClick={getAllDirectors}>Directors</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    data: state.data
  };
};

const mapDispatchToProps = {
  increaseCount,
  getAllDirectors
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
