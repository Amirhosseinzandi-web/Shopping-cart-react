import React, { useContext, useEffect } from 'react'
import { Api } from './ContextApi'


function Items({index,para}) {
    const {data , setData , total , setTotal} = useContext(Api)
    

    const QuantityHandler = (d) =>{
      data.forEach((self,ind)=>{
        if(self.id===para.id){
          data[ind].count += d
          
          if(data[ind].count<1){
            data[ind].count = 1
          }
          setData([...data])
        }
      })
    }

    const RemoveHandler = () =>{
      let arr = data.filter(item=> item.id !== para.id)
      setData(arr)
    }


    const SelfSum = () =>{
      data.forEach((self,ind)=>{
        if(self.id===para.id){

          data[ind].selfTotal = (data[ind].count) * (data[ind].price)
          setData([...data])
        }
      })
    }


    useEffect(()=>{
      SelfSum()
    },[total])
   


  return (
    <div className='border'>
        <p>{data[index].name}</p>
        <p>{data[index].price}</p>
        <p>{data[index].count}</p>
        <p>{data[index].selfTotal}</p>
        <button className='btn btn-success' onClick={()=>QuantityHandler(+1)}>+</button>
        <button className='btn btn-danger mx-1' onClick={()=>QuantityHandler(-1)}>-</button>
        <button className='btn btn-secondary' onClick={RemoveHandler}>&#10005;</button>
    </div>
  )
}

export default Items