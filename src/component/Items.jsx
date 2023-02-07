import React from "react";




export default function Items({ data, setData, ...item }) {
    const { name, price, count } = item

    const HandleChange = (d) => {
        data.forEach((self, index) => {
            if (self.id === item.id) {
                data[index].count+=d
                setData([...data])
            }
        })
    }


    const Remove = () =>{
        let arr = data.filter(para=>para.id !== item.id)
        setData(arr)
    }

    return (
        <>
            <div className="border my-2">
                <p>name : {name}</p>
                <p>price : {price}</p>
                <p>count : {count}</p>
                <button className="btn btn-success" onClick={() => HandleChange(+1)}>+</button>
                <button className="btn btn-danger mx-2" onClick={() => HandleChange(-1)}>-</button>
                <button className="btn btn-secondary" onClick={Remove}>&#10005;</button>
            </div>
        </>
    )
}