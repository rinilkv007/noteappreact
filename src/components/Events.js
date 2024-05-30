import React from 'react';
import {Button,Table,Accordion,Card,Navbar,Nav,Container} from 'react-bootstrap';

const Events = () => {
    const clickHandle = ()=>{
        console.log("you click me");
    };

    const dbclickHandle = (name)=>{
        alert("Hello "+ name);
    };

    const onChangeHandle = (name)=>{
        alert("on Change Event");
    };

    const onmouseHandle = (name)=>{
        alert("mouse over the element");
    };
  return (
    <>
    <h1 className='bg-success text-white'>Learn REACT events</h1>
    <Button onClick={clickHandle}>Click Me</Button>
    <h1 onDoubleClick={() => dbclickHandle("Ardrav")}>Double Click</h1>
    <input onChange={onChangeHandle} type="text" />
    <h1 onMouseOver={onmouseHandle}>Mouse over</h1>
    </>
  );
};

export default Events;