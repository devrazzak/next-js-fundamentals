/* eslint-disable react/jsx-key */
import User from "../../Components/User";

function Users({ users }) {
  return (
    <div>
      <h2>User Names:</h2>
      {users.map((item) => (
        <User user={item} />
      ))}
    </div>
  );
}

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
