import React from 'react'

function Search(props) {

    const handleInput = (evt) => {
        props.changeSearchTerm(evt.target.value)
    }

    return(
        <div id="search">
            <input type="text"
                name="search"
                className="search"
                placeholder="Search"
                value={props.searchTerm}
                onChange={handleInput}
            />
        </div>
    )
}

export default Search;