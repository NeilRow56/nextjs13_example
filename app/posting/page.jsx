"use client"

import React, { use } from 'react'

async function fetchData() {
    const res = await fetch('http://localhost:3000/api/hello')
    return res.json()
}

const dataPromise = fetchData()

export default  function PostingPage() {

   const data = use(dataPromise)

  
  return (
    <div>{JSON.stringify(data)}</div>
  )
}
