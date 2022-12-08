import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>ProductDetails Page {productId}</div>;
};
export default ProductDetails;
