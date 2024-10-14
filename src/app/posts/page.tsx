'use client'
import React from 'react'
import { useEffect, useState } from 'react'


interface postItem{
    userId: number
    id: number
    title: string
    body: string

}


function page() {

    const [posts, setPosts] = useState<postItem[]>([]);
    useEffect(()=>{
        
        fetch("https://jsonplaceholder.typicode.com/posts").then((response)=> response)
        .then((e)=> e.json())
        .then((e)=> setPosts(e as postItem[]));
    }, []);

  return (
    <div className='mt-36 text-center'>
      <h1>Hello world</h1>
      <button 
      
      className='bg-white text-red-600'>Fetch Data</button>
      <h1>All Posts</h1>
        <div className='border-2'>
            {posts.map((post)=>(
                <div className='border-2' key={post.id}>
                  
                    <h1>{post.id}  <span>{post.title}</span></h1>
                    <p>{post.body}</p>
                    </div>
                    
            ))}

        </div>
        
      
    </div>
  )
}

export default page
