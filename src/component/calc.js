import React, { useState } from 'react'

function Calc() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [count , setCount ] = useState(0);

    let[error, setError] = useState("");
    let[success, setSuccess] = useState("");

    
  return (
    <div id='main'>
        <div>
            <div>
                <input onChange={(e) => {setNum1(e.target.value)}} id='num1' type='number' placeholder='Num 1' />
            </div>
            <div>
                <input onChange={(e) => {setNum2(e.target.value)}} id='num2' type='number' placeholder='Num 2' />
            </div>
        </div>
        <div>
            <button onClick={(e)=> {
                     e.preventDefault();
                    if(num1==="" || num2===""){
                        setError("Error!")
                        setSuccess("")
                        return; 
                    }
                setCount(num1+num2)
                setError("")
                setSuccess("Sucess")
                return ;
                
                }} id='plus'>+</button>

            <button onClick={(e)=> {
                    e.preventDefault();
                    if(num1==="" || num2===""){
                        setError("Error!")
                        setSuccess("")
                        return; 
                    }
                setCount(num1-num2)
                setError("")
                setSuccess("Sucess")
                return ;
                
                }} id='minus'>-</button>
            <button onClick={(e)=> {
                     e.preventDefault();
                    if(num1==="" || num2===""){
                        setError("Error!")
                        setSuccess("")
                        return; 
                    }
                setCount(num1*num2)
                setError("")
                setSuccess("Sucess")
                return ;
                
                }}  id='mult'>*</button>
            <button onClick={(e)=> {
                     e.preventDefault();
                    if(num1==="" || num2===""){
                        setError("Error!")
                        setSuccess("")
                        return; 
                    }
                setCount(num1/num2)
                setError("")
                setSuccess("Sucess")
                return ;
                
                }} id='divi'>/</button>
        </div>
           {
                error &&(
                    <p style={{ color: 'red' }} id='error'>{error}</p>
                )
                
            }
            {
               success &&(
                <p style={{ color: 'green', }} id="success">{success}</p>
               )
               
            }

        <h1>Result is here: {count} </h1>
      
    </div>
  )
}

export default Calc;
