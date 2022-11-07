import React from 'react'


// For database calls
// export const dynamic = 'force-dymamic'

async function getPostById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    {
        // next: { revalidate: 10 }
        // cache: 'no-store'
    }
    )

    const post = await response.json()

    return post
}

export default async function PostWithIdPage({params, searchParams}) {
    const post = await getPostById(params.id)
  return (
    <div>Post With Id Page
    <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  )
}
