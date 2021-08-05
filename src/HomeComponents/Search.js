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
                placeholder="Search..."
                value={props.searchTerm}
                onChange={handleInput}
            />
            {/* <div id='button-holder'>
                <img src='https://static.vecteezy.com/system/resources/previews/001/591/518/non_2x/free-search-icon-free-vector.jpg' />
            </div> */}
        </div>
    )
}

export default Search;