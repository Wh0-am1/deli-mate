import React from 'react';

function SearchForFilter(props) {
  return (
    <div className="pincode">
        <span className='span'>{props.span}</span>
        <div className="search-pincode">
        <input type="number" placeholder={`Entere the ${props.placeholder}`}/>
        </div>
  </div>
  )
}

export default SearchForFilter