import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to={'/my'}>Move my</Link>
    </div>
  )
}

export default Home