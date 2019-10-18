// import App from "./App";
import React from 'react';

export default function List (props) {
    return (
        <section className='List'>
            <header className="header">
                {props.header}
            </header>
            <div className="List-cards">
                {props.cardIds}
            </div>
        </section>
    )
}