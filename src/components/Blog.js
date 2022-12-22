import {useEffect, useState} from 'react';


function Blog() {
  const [post, setPost] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(
      res => res.json()
    ).then(data => setPost(data));
  },[])


  return (

    <div className="App">
      {post && <div>
         {post.map((val) => {
          return (
            <div key={val.id}>
             <h2>Title: {val.title}</h2>

       
            </div>
      
          )
         })}
        </div>}
    </div>
  );
}

export default Blog;