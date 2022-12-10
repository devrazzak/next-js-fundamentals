function Post({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData = await response.json();
  const paths = postData.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    // Dynamic generation
    paths,

    // This is static generation
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },
    //   {
    //     params: { postId: "2" },
    //   },
    //   {
    //     params: { postId: "3" },
    //   },
    // ],

    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
