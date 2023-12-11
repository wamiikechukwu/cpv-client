import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signin from './components/signin/signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Signin/>
    </main>
    
    
  )
}

export default App
