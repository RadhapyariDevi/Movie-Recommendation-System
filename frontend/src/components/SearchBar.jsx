import React, { useState } from 'react'

function SearchBar({onSearch, loading}) {
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
                placeholder="search movies..."
                value={query}
                disabled={loading}
                onChange={(e) => setQuery(e.target.value)}
                className="
                    flex-1
                    px-4 py-3
                    rounded-xl
                    bg-snow/80
                    text-ink
                    outline-none
                    disabled:opacity-50
                "
            />

            <button
                type="submit"
                disabled={loading}
                className="
                    px-6 py-3
                    bg-wine
                    text-white
                    rounded-xl
                    hover:bg-wine/80
                    transition-colors
                    disabled:opacity-70
                    hover:cursor-pointer
                    flex items-center gap-2
                "
                >
                {loading ? (
                    <>
                    <div
                        className="
                        w-4 h-4
                        border-2
                        border-white/30
                        border-t-white
                        rounded-full
                        animate-spin
                        "
                    />
                    Searching...
                    </>
                ) : (
                    "Search"
                )}
                </button>
        </form>
    </div>
  )
}

export default SearchBar