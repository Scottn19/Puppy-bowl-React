import React from 'react'
import { Link
 } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav>
        <Link to="/">All Players</Link>
        <Link to="/addNew">Add a New Player</Link>
    </nav>
  )
}
