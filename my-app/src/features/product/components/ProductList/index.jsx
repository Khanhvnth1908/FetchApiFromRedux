import React from 'react';
import ProductItem from '../ProductItem';
import PropTypes from 'prop-types';

ProductList.propTypes = {
    productList: PropTypes.array,
};


ProductList.defaultProps = {
    productList: null
}

function ProductList(props) {

    const {productList} = props;

    return (
        <div>
            {productList.map(product => (
                <ProductItem product={product}/>
            ))}
        </div>
    ); 
}

export default ProductList;