import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Button, Blower, DosingPump, Valve, Pump } from '../../src'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{height: "100vh", width: '100vw', background: '#fff'}}>
        <div style={{width: 50, height: 50, display: 'flex'}}>

          <Valve options={{open:'true'}} />
        </div>

        <div style={{width: 50, height: 50}}>
          <Button />
        </div>
        <div style={{width: 50, height: 50}}>

          <Blower options={{on: 'true'}} />
        </div>

        <div style={{width: 50, height: 50}}>

          <Pump options={{on: 'true'}} />
        </div>
        <div style={{width: 50, height: 50}}>

          <DosingPump options={{on: 'true'}} />
        </div>

    </div>
  )
}

export default App
