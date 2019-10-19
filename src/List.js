// import App from "./App";
import React from 'react';
import Card from './Card.js';
import STORE from './Store.js';

// this is run by App to display lists from items in STORE's "list" key
// it does this by iterating through each list and then, for each one, iterating through cardIds.  
//For each cardId, the associated card from STORE's allCards is called.  Should Card do this instead?

export default function List (props) {
    return (
        <section className='List'>
            <header className="header">
                {props.header}
            </header>
            <div className="Card-content">
                {props.cardIds.map(letter => {
                    const specificCard = STORE.allCards.letter;
                    return (
                        <Card 
                            title={specificCard.title} 
                            content={specificCard.content}
                        />
                    )
                })}
            </div>
        </section>
    )
}




{/* for (let i = 1; i <= props.cardIds; i++) {
                    <Card 
                    title={STORE.allCards.cardIds.title} 
                    content= {STORE.allCards.i.content} 
                    /> */}