import React from 'react';
import List from './List.js'

function App(store) {
    const storeLists = store.lists.map(list =>
        <List >
            ${list}
        </List>
      );

    return storeLists;
}

export default App;


// <body>
//   <main className="App">
//     <header class="App-header">
//       <h1>Trelloyes!</h1>
//     </header>
//     <div class="App-list">
//       <section class="List">
//         <header class="List-header">
//           <h2>First list</h2>
//         </header>
//         <div class="List-cards">
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>First card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Second card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Fifth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Sixth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Seventh card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Tenth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Twelfth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Thirteenth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//             <button type="button" class="List-add-button">
//               + Add Random Card
//             </button>
//         </div>
//       </section>
//       <section class="List">
//         <header class="List-header">
//           <h2>Second list</h2>
//         </header>
//         <div class="List-cards">
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Second card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Third card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Fourth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Sixth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Eighth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Ninth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Eleventh card</h3>
//             <p>lorem ipsum</p>
//           </div>
//             <button type="button" class="List-add-button">
//               + Add Random Card
//             </button>
//         </div>
//       </section>
//       <section class="List">
//         <header class="List-header">
//           <h2>Third list</h2>
//         </header>
//         <div class="List-cards">
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>First card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Second card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Third card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Fourth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Fifth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Sixth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Seventh card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Eighth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Ninth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Tenth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Eleventh card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Twelfth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Thirteenth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <button type="button" class="List-add-button">
//             + Add Random Card
//           </button>
//         </div>
//       </section>
//       <section class="List">
//         <header class="List-header">
//           <h2>Fourth list</h2>
//         </header>
//         <div class="List-cards">
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Twelfth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <div class="Card">
//             <button type="button">delete</button>
//             <h3>Thirteenth card</h3>
//             <p>lorem ipsum</p>
//           </div>
//           <button type="button" class="List-add-button">
//             + Add Random Card
//           </button>
//         </div>
//       </section>
//     </div>
//   </main>
// </body>

// </html>

