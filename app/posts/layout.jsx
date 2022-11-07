import Link from 'next/link'
import React, { use } from 'react'

async function getPosts() {
    let posts = await fetch("https://dummyjson.com/posts?limit=3")

    return posts.json()
}


const Layout = ({children}) => {
    let {posts} = use(getPosts())
    
  return (
    <>
    <div>
        <h2>All Posts</h2>
        
    </div>
    <div>
        <ul>
            {posts.map((p) => (
                <li key={p.id}>
                    <Link href={`/posts/${p.id}`}>{p.title}</Link>
                    </li>
            ))}
        </ul>
        <div>{children}</div>
    </div>
    </>
  )
}

export default Layout