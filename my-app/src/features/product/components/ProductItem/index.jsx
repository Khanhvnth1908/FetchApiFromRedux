import React from "react";
import PropTypes from "prop-types";

ProductItem.propTypes = {
  product: PropTypes.object,
};

ProductItem.dfaultProps = {
  product: null,
};

function ProductItem(props) {
  const { product } = props;
  return (
    <div>
      {product.name}
    </div>
  );
}

export default ProductItem;
