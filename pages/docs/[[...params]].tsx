import { useRouter } from "next/router";

const Params = () => {
  const router = useRouter();
  // params = [] means initial params value
  const { params } = router.query;

  if (params?.length === 2) {
    return (
      <h1>
        viewing feature for {params[0]} and consept {params[1]}
      </h1>
    );
  } else if (params?.length === 1) {
    return <h1>viewing feature for {params[0]}</h1>;
  }

  return <div>Docs Home Page</div>;
};

export default Params;
