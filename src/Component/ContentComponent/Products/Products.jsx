import ProductCard from "../Products/ProductCard";
import products from "../../../products.json";

function Products() {
  return (
    <div className="flex flex-wrap ">
      {products.map((product) => (
        <ProductCard ProductData={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
