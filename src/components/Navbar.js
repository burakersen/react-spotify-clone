import React from 'react'
import Auth from './Navbar/Auth'
import Navigation from './Navbar/Navigation'
import { useMatch } from 'react-router-dom'

const Navbar = () => {
  const searchRoute = useMatch('/search')

  return (
    <div className="flex items-center justify-between h-[3.75rem] px-8">
      <Navigation />
      {searchRoute && (
        <div>Search Kısmı</div>
      )}
      <Auth />
    </div>
  )
}

export default Navbar