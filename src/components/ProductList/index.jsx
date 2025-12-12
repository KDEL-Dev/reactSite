import { useEffect, useState } from "react";
import "./productList.css";

export default function DisplayProduct() {
  const [productInfo, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://reactsitebackend.onrender.com/api/products");
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, []);

  const allProducts = [];

  for (let i = 0; i < productInfo.length; i++) {
    const singleProduct = productInfo[i];
    allProducts.push(
      <div className="product">
        <div className="productName">
          <h3>{singleProduct.productName}</h3>
        </div>
        <div className="productImg"></div>
        <div className="productDesc">
          <p >{singleProduct.productDesc}</p>
        </div>
        <div>
          <h3 className="productPrice"> {singleProduct.productPrice}</h3>
        </div>
      </div>
    );
  }

  return (
    <section>
      <h2>All Products</h2>

      {allProducts.length > 0 ? (
        <div className="productRow">{allProducts}</div>
        ) : (  <p>Loading products...</p> )}
    </section>
  );
}
