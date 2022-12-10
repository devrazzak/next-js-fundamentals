import Link from "next/link";
import Router from "next/router";

function Home() {
  const handleChange = () => {
    // redirect a page
    Router.push("/product");
  };
  return (
    <div>
      <h2>Home Page</h2>
      {/* link */}
      <Link href={"/blog"}>blog</Link>
      <br />
      <Link href="/profile">profile</Link>

      {/* button click and route change */}
      <button onClick={handleChange}>Route</button>
    </div>
  );
}

export default Home;
