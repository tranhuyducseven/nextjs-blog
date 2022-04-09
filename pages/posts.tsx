import React from "react";
import Layout from "../layout/Layout";
import Card from "../components/Card";
import { getPosts } from "../lib/post";
const Post = ({ posts }) => {
  return (
    <Layout>
      <div>Posts of My App</div>
      {posts.map((post) => {
        return <Card post={post} />;
      })}
    </Layout>
  );
};
export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};
export default Post;
