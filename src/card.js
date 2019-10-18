import React from 'react';

function card(title, content) {
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>{content}</p>
            <button type="button">Delete</button>
        </div>
    )
}