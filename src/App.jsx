import React from 'react'
import { ContextApi } from './component/ContextApi'
import Main from './component/Main'



function App() {
  return (
    <ContextApi>
      <Main/>
    </ContextApi>
  )
}

export default App