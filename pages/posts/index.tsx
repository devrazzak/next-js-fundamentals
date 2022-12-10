import Link from "next/link";

function PostsList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostsList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData = await response.json();

  return {
    props: {
      //   posts: postData.slice(0, 3),
      posts: postData,
    },
  };
}
