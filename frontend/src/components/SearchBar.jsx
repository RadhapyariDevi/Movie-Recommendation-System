import React, { useState } from 'react'

function SearchBar({onSearch}) {
    const [query, setQuery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!query.trim())return 
        onSearch(query)
    }
  return (
    <div>
        <form
           onSubmit={handleSubmit}
           className='flex gap-3 mb-8'
        >
            <input
                type="text"
                placeholder='search movies...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='flex-1 px-4 py-3 rounded-xl bg-snow/80 text-ink outline-none'
             />

            <button
                type='submit'
                className='px-6 py-3 bg-wine text-white rounded-xl hover:bg-wine/80 transition-colors'
            >
                Search
            </button>
        </form>
    </div>
  )
}

export default SearchBar