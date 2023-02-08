import React, { createContext, useState } from 'react'



let Api = createContext()
function ContextApi({children}) {
    const [data , setData] = useState([])
    const [total , setTotal] = useState(0)
  return (
    <Api.Provider value={{data , setData , total , setTotal}}>
        {children}
    </Api.Provider>
  )
}

export {ContextApi , Api}