import React, { use } from 'react'

async function getPost(id) {
    let post = await fetch(`https://dummyjson.com/posts/${id}`)

    return post.json()

}

const PostDetail = ({params}) => {
    let id = params.id
    let post = use(getPost(id))
  return (
    <div>
        <div>{post.title}</div>
        <div>{post.body}</div>
    </div>
  )
}

export default PostDetail