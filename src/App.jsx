import React from 'react'
import Calculator from './components/Calculator'
import { CalcProvider } from './CalcContext'

function App() {

  return (
    <CalcProvider>
      <Calculator />
    </CalcProvider>
  )
}

export default App
