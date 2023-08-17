import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Post = () => {
  // Hookでparamsを取得可能
  const { postId } = useParams();
  const [post, setPost] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await res.json();
      setPost(data);
    };

    fetchPost();
  }, [postId])

  return (
    <>
      <div>Single Post</div>
      <div>
        <p>ID: {post.id}</p>
        <p>タイトル: {post.title}</p>
        <p>内容: {post.body}</p>
      </div>
    </>
  )
}

export default Post