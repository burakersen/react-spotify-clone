import React from 'react'

const Playlists = () => {
  return (
    <nav className="flex-auto py-2 mx-6 mt-2 botder-t border-t-2 border-white border-opacity-20 overflow-auto">
        <ul>
            {new Array(40).fill(
                <li>
                    <a href="#" className="text-link text-s hover:text-white flex h-8 items-center">3. Çalma Listem</a>
                </li>
            )}
            
        </ul>
        
    </nav>
  )
}

export default Playlists