import useSWR from 'swr'


function Blog2() {

 const {data} = useSWR('https://jsonplaceholder.typicode.com/posts',(url) => fetch(url).then(res => res.json()) )

  return (

    <div className="App">
      {data && <div>
         {data.map((val) => {
          return (
            <div key={val.id}>
             <h2>Title: {val.title}</h2>
             <p>Body: {val.body}</p>
       
            </div>
      
          )
         })}
        </div>}
    </div>
  );
}

export default Blog2;