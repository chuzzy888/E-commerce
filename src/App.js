// import React from 'react';
// import './App.css';
// import  Navbar  from './component/Navbar';

// function App() {
//   return (
//     <div className="App">
//     <Navbar/>
    
    
//     </div>
//   );
// }

// export default App;


// App.js

import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { CartProvider } from 'react-use-cart'; // Import CartProvider



function App() {
  return (
    <div className="App">
      <CartProvider> {/* Wrap your app with CartProvider */}
        <Navbar />
      
      </CartProvider>
    </div>
  );
}

export default App;



