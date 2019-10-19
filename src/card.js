import React from 'react';

export default function Card ({title, content}) {
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>{content}</p>
            <button type="button">Delete</button>
        </div>
    )
}