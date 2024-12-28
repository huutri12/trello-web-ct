import { useState } from 'react'
import Button from '@mui/material/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>HuuTriDev</div>
      <Button variant="contained">Hello world</Button>
    </>
  )
}

export default App
