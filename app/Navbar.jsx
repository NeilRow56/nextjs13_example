import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav style={{ padding: "10px 0 10px 0"}}>
          <Link href= '/'>Home1</Link>
          <Link href= '/posts'>Posts1</Link>

        </nav>
  )
}

export default Navbar