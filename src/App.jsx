import React, { useEffect, useState } from "react";
import Items from "./component/Items";



export default function App(){
  const [data , setData] = useState([])
  const [finish , setFinish] = useState(0)

  const firstAdd = (e) =>{
    let father = e.target.parentElement
    const product = {
      name : father.children[0].innerText , 
      price : father.children[1].innerText , 
      count : 1 , 
      id : father.children[2].value,
      key : Date.now()
    }
    let isInArray = false;
    data.forEach(self=>{
      if(self.id===product.id){
        isInArray = true
      }
    })
    if(!isInArray){
      setData([...data , product])
    }else{
      alert("its in basket")
      return
    }
  }


  const HandlePrice = () =>{
   let sum = 0;
   data.forEach(self=>{
    sum += ((self.price) * (self.count))
   })
   setFinish(sum)
  }

  useEffect(()=>{
    const getLocal = () =>{
      if(localStorage.getItem("cart")===null){
        localStorage.setItem("cart" , JSON.stringify([]))
      }else{
        let cartLocal = JSON.parse(localStorage.getItem("cart"))
        setData(cartLocal)
      }
    }
    getLocal()
  },[])



  useEffect(()=>{
    HandlePrice()
    const setLocal = ()=>{
      localStorage.setItem("cart" , JSON.stringify(data))
    }
    setLocal()
  },[data])

  return(
    <>
        <section className="d-flex">
            <div className="border mx-2">
                <p>coffee</p>
                <p>1000</p>
                <input type="hidden" value="1" />
                <button className="btn btn-success" onClick={firstAdd}>Add</button>
            </div>
            <div className="border mx-2">
                <p>book</p>
                <p>1200</p>
                <input type="hidden" value="2" />
                <button className="btn btn-success" onClick={firstAdd}>Add</button>
            </div>
        </section>
        <p style={{"position":"fixed" , "top":"5px", "right":"10px"}}>{data.length}</p>
        <p>sum : {finish}</p>
        <ul className="p-2">
          {
            data.map(item=>(
              <Items key={item.key} {...item} data={data} setData={setData}/>
            ))
          }
        </ul>
    </>
  )
}