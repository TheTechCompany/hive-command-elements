import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Button } from '../../src/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{height: "100vh", width: '100vw', background: '#fff'}}>
   
          <Button 
            color={'blue'}
            textColor={'white'}
            >
            Title
          </Button>
         
    </div>
  )
}

export default App
