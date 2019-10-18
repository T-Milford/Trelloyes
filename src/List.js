// import App from "./App";
import React from 'react';

export default function list (header, cards) {
    return (
        <section className='List'>
            <header className="header">
                ${header}
            </header>
            <div className="List-cards">
                ${cards}
            </div>
        </section>
    )
}