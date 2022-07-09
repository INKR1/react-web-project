import React from 'react'

export default function CitiesWrapper(props) {
  return (
    <li>
        <div>
            <img src={props.imgFile} alt={props.name} />        
        </div>
        <div>
            <h3>{props.name}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div>
            <button>To Favorites</button>
        </div>
    </li>
  )
}
