import Navbar from 'components/Navbar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Collection from 'views/Collection'
import Home from 'views/Home'
import Search from 'views/Search'

const Content = () => {
  return (
    <main className="flex-1">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
      </Routes>
    </main>
  )
}

export default Content