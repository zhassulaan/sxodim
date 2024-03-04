import { useEffect, useState } from 'react';
import axios from 'axios';

function LastViewed() {
	const [lastViewedPosts, setLastViewedPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts/')
      .then(response => {
        setLastViewedPosts(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Last viewed posts</h2>
      {lastViewedPosts.map(post => (
        <div key={post.id}>
          <img src={post.image} alt={post.title} />
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <a href={`/post/${post.id}`}>View post</a>
        </div>
      ))}
    </div>
  );
}

export default LastViewed;
