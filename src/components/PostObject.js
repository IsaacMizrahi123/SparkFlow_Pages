import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function PostObject() {
  let params = useParams()
  let name = params.id
  const [post, setPost] = useState({});
  
  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(
        `https://sparkflow_worker.sparkflow.workers.dev/mainfeed/${name}`
      );
      const postResp = await resp.json();
      setPost(postResp);
    };

    getPost();
  }, [name]);

  if (!Object.keys(post).length) return <div Hello/>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.user}</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};


/*function PostObject() {
  let params = useParams()
  let name = params.id
  return (
    <div class="card">
      <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  );
}*/

export default PostObject;