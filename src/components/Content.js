import Navbar from 'components/Navbar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Collection from 'views/Collection'
import Home from 'views/Home'
import Search from 'views/Search'

const Content = () => {
  return (
    <main className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-4">
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/collection" element={<Collection />}></Route>
        </Routes>
      </div>
    </main>
  )
}

export default Content