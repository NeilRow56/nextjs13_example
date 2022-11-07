import Link from 'next/link'
import React from 'react'
import { notFound } from 'next/navigation'

export default async function PostsSummary () {

    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?limit=5")

    const posts = await response.json()

    // For demo purposes only
    if (posts.length > 0) {
    //     throw new Error('Wow we have some posts....')
    notFound()
    }

    return (
    <div>
        <h2>Posts Summary</h2>
        {posts.map(post => {
            return(
            <div key = {post.id}>
                <Link href={`/postsSummary/${post.id}`}>{post.id} {post.title}</Link>
            </div>
            )
        }

        )}
    </div>
  )
    
}
  


