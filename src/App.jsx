import { useState } from 'react';
import './App.css'
import NavbarComponent from './components/NavbarComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
  <NavbarComponent/>
  </div>

  
  )
}

export default App