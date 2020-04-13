import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const ProductRow = withRouter(({
  product, productRemove, index,
}) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.category}</td>
      <td>{product.product_name}</td>
      <td>{product.price}</td>
      <td>{product.image_path}</td>
      <td>
        <Link to={`/productedit/${product.id}`}>Edit</Link>
        {' | '}
        <button type="button" onClick={() => { productRemove(index); }}>
          Delete
        </button>
      </td>
    </tr>
  );
});

export default function ProductTable({ products, productRemove }) {
  const ProductRows = products.map((product, index) => (
    <ProductRow
      key={product.id}
      product={product}
      productRemove={productRemove}
      index={index}
    />
  ));

    return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {ProductRows}
      </tbody>
    </table>
  );
}