import React, { useEffect, useState } from "react";
import { Link, Outlet  } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://sparkflow_worker.sparkflow.workers.dev/mainfeed"
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.name}>
          <h2>
            <Link to={`/posts/${post.name}`}>{post.name}</Link>
          </h2>
        </div>
      ))}
    <Outlet />
    </div>
  );
};

export default Posts;