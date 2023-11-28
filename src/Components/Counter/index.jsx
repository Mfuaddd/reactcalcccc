import React, { useState } from 'react'
import useLocalStorage from '../../hook/useLocalStorage'
import "./index.scss"

function Counter() {
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)
    const [res, setRes] = useState("")

    function add() {
        console.log(+input1,+input2);
        if (isNaN(+input1) || isNaN(+input2)) return setRes("error")
        setRes(`${+input1 + +input2}`)
    }
    function minus() {
        if (isNaN(+input1) || isNaN(+input2)) return setRes("error")
        setRes(`${+input1 - +input2}`)
    }
    function divide() {
        if (isNaN(+input1) || isNaN(+input2)) return setRes("error")
        if(+input2 === 0) return setRes("error")
        setRes(`${+input1 / +input2}`)
    }
    function multy() {
        if (isNaN(+input1) || isNaN(+input2)) return setRes("error")
        setRes(`${+input1 * +input2}`)
    }
  
    return (
    <>
        {/* <div><span onClick={inc}>Counter :</span> <span onClick={dec}>{count}</span></div> */}
        {/* <input type="text" onInput={(x)=>setLocal(x.target.value)} value={local}/> */}
        <h1>calculator</h1>
        <input type="text" onInput={e=>setInput1(e.target.value)}/>
        <input type="text" onInput={e=>setInput2(e.target.value)}/>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={divide}>/</button>
        <button onClick={multy}>*</button>
        <div>{res}</div>
    </>

  )
}

export default Counter