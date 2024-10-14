'use client'
import React from 'react'
import { useState, useEffect } from 'react'


interface blogItems{
    postId: number
    id: number
    name: string
    email: string
    body: string

}

function page() {

    const [blogs, setBlogs] = useState<blogItems[]>([])

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/comments").then((response)=>response)
    //     .then((e)=> e.json())
    //     .then((e)=> setBlogs(e as blogItems[]))
    // },[])

    const handleClick3 =  async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await response.json() as blogItems[]
        setBlogs(data)
        
      } catch (error) {
        console.log("error is coming")
      }
    }

    // const handleClick =  () => {

    //      (fetch("https://jsonplaceholder.typicode.com/comments").then((response)=> response)
    //     .then((e)=> e.json())
    //     .then((e)=> setBlogs(e as blogItems[]))
    // )}

//     const handleClick2 = async () => {

//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/comments")
//         const json = await response.json() as blogItems[]
//         setBlogs(json)
//       } catch (error) {
        
//       }

      
//  }


  return (
    <div className='mt-36 text-center'>

        <button onClick={handleClick3}>click me</button>
      <div className='text-left mt-10'>
        {blogs.map((blog)=>(
            <div className='border-2' key={blog.id}>
                <h1>{blog.name}</h1>
                <h2>{blog.email}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default page
