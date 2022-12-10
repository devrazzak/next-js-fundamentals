import Link from "next/link";

const Product = () => {
  return (
    <div>
      <Link href={`/product/${1}`}>
        <li>product 1</li>
      </Link>
      <Link href={`/product/${2}`}>
        <li>product 2</li>
      </Link>
      <Link href={`/product/${3}`}>
        <li>product 3</li>
      </Link>
    </div>
  );
};
export default Product;
