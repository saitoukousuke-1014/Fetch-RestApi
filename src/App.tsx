import React from 'react';
import './App.css';

// const promise = fetch('https://jsonplaceholder.typicode.com/users');

// promise
// .then(function(response) {  // fetch が返した Promise の解決を待つ
//   return response.text();
// })
// .then(function(text) {  // response.text が返した Promise の解決を待つ
//   console.log(text);
// });

// fetch('https://jsonplaceholder.ir/users', {
//   method: 'GET',
// })
//   .then(response => response.json())
//   .then(json => console.log(json))

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//         <p>RestAPIのデータを表示するreact + tsアプリケーション</p>

//         <a
//           className="App-link"
//           href="https://jsonplaceholder.typicode.com/users"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           https://jsonplaceholder.typicode.com/users
//         </a>  
        
//       </header>
        
//     </div>
          
//   );
// }
import './App.css';
import ApiFetch from './ApiFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApiFetch />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          
      </header>
    </div>
  );
}

export default App;
