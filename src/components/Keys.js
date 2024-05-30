import React, { useState } from 'react'

const products =[
    {id:1,name:"Laptop",brand:"Dell",Qty:1},
    {id:2,name:"Laptop",brand:"Hp",Qty:1},
    {id:3,name:"Laptop",brand:"Lenovo",Qty:1},
]

const Keys = () => {
    const [items,setItem]=useState(products);
    const changeQty=(id)=>{
       const newItem= items.map((item)=>
        item.id ===id?{...item,Qty:item.Qty+1}:item);
        setItem(newItem);
    };
  return (
    <div>
        {
            items.map((product)=> 
        (
            <div className='bg-success text-white m-3' key={product.id}>
            <h1>{product.name}</h1>
            <h3>Brand:{product.brand}</h3>
            <h4>{product.Qty}</h4>
            <button onClick={()=>changeQty(product.id)} type='button'>+</button>
            </div>
        ))
        }
       
    </div>
  )
}

export default Keys