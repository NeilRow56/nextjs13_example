"use client"
import React from 'react'

export default function PostSummaryError({error}) {
  return (
    <div>PostSummaryError
        <p>{error.message}</p>
    </div>
  )
}

