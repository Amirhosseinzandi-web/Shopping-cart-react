import React, { useContext, useEffect } from 'react'
import PicOne from "../img/1.jpg"
import PicTwo from "../img/2.jpg"
import PicThree from "../img/3.jpg"
import PicFour from "../img/4.jpg"
import PicFive from "../img/5.jpg"
import { Api } from './ContextApi'
import Items from './Items'


function Main() {
  let { data, setData, total, setTotal } = useContext(Api)

  const FirstAdd = (e) => {
    const father = e.target.parentElement;
    const Product = {
      name: father.children[1].innerText,
      price: father.children[2].children[0].innerText,
      src: father.children[0].children[0].src,
      id: father.children[3].value,
      key: Date.now(),
      count: 1,
      selfTotal: 1
    }
    let isInArray = false;
    data.forEach(self => {
      if (self.id === Product.id) {
        isInArray = true;
      }
    })
    if (!isInArray) {
      setData([...data, Product])
    } else {
      alert("Already in basket")
      return
    }


  }


  const Para = (e) => {
    document.getElementById("result").classList.toggle("none")
    e.stopPropagation()
  }



  const handlePrice = () => {
    let Sum = 0
    data.forEach(self => {
      Sum += ((self.count) * (self.price))
    })
    setTotal(Sum)
  }

  
  
  useEffect(()=>{
    const GetFirst = () =>{
      if(localStorage.getItem("items")===null){
        localStorage.setItem("items" , JSON.stringify([]))
      }else{
        let getLocal = JSON.parse(localStorage.getItem("items"))
        setData(getLocal)
      }
    }
    GetFirst()
  },[])


  const setLocalData = () =>{
    localStorage.setItem("items" , JSON.stringify(data))
  }
  

  useEffect(() => {
    handlePrice()
    setLocalData()
  }, [data])

  const RemoveAllItems = () =>{
    data = []
    setData(data)
  }


  return (
    <>
      <main className='d-flex'>
        <section className='cti d-flex flex-wrap'>
          <div className='d-flex flex-column align-items-center m-2'>
            <figure className='pic'><img src={PicOne} alt="" /></figure>
            <figcaption>Perfume</figcaption>
            <div className='d-flex'>
              <p>10000</p>
              <span>$</span>
            </div>
            <input type="hidden" value="1" />
            <button onClick={FirstAdd}>Add</button>
          </div>
          <div className='d-flex flex-column align-items-center m-2'>
            <figure className='pic'><img src={PicTwo} alt="" /></figure>
            <figcaption>Shampoo</figcaption>
            <div className='d-flex'>
              <p>12000</p>
              <span>$</span>
            </div>
            <input type="hidden" value="2" />
            <button onClick={FirstAdd}>Add</button>
          </div>
          <div className='d-flex flex-column align-items-center m-2'>
            <figure className='pic'><img src={PicThree} alt="" /></figure>
            <figcaption>Bicycle</figcaption>
            <div className='d-flex'>
              <p>14000</p>
              <span>$</span>
            </div>
            <input type="hidden" value="3" />
            <button onClick={FirstAdd}>Add</button>
          </div>
          <div className='d-flex flex-column align-items-center m-2'>
            <figure className='pic'><img src={PicFour} alt="" /></figure>
            <figcaption>Guitar</figcaption>
            <div className='d-flex'>
              <p>16000</p>
              <span>$</span>
            </div>
            <input type="hidden" value="4" />
            <button onClick={FirstAdd}>Add</button>
          </div>
          <div className='d-flex flex-column align-items-center m-2'>
            <figure className='pic'><img src={PicFive} alt="" /></figure>
            <figcaption>Book</figcaption>
            <div className='d-flex'>
              <p>18000</p>
              <span>$</span>
            </div>
            <input type="hidden" value="5" />
            <button onClick={FirstAdd}>Add</button>
          </div>
        </section>
        <p className='result-btn' onClick={Para}>|||</p>
        <div id='result' className='none'>
          Basket in items
          <button className='btn btn-primary m-3' onClick={RemoveAllItems}>Remove All</button>
          {
            data.map((para, index) => (
              <Items key={para.key} para={para} index={index} />
            ))
          }
        </div>
        <p className='size'>items in basket: {data.length}</p>
        <p className='total'>Total: {total}</p>
      </main>
    </>
  )
}

export default Main