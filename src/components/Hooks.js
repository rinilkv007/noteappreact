import React,{useState} from 'react';
import {Button,Table,Accordion,Card,Navbar,Nav,Container} from 'react-bootstrap';

const Hooks = () => {
   const[colour,setColour]= useState("Green");
   const [count,setCount]= useState(0);
   
   const changeColour =() => {
    setColour("Red");
   };

   const increment =() => {
    setCount(count+1);
   };

   const decrement =() => {
    setCount(count-1);
   };


  return (
    <>
    <h1 className='bg-warning text-white'>Use state hook</h1>
    <h2>My favorite colour is {colour}</h2>
    <Button onClick={changeColour} > Change colour</Button>
     
    <h1> counter is{count}</h1>
    <Button onClick={increment} className='m-2 bg-success'>+</Button>
    <Button onClick={decrement} className='m-2 bg-danger'>-</Button>


    </>
  );
};

export default Hooks;