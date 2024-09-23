import React, { useState } from "react";

export default function Calc(){
  const[calc,setCalc]=useState({
    current:"0",
    total:"0",
    isInitial:true,
    preOp:"",
    display: "0" 
  });

  function handleNumber(value){
    let newValue=value;
    if(!calc.isInitial){
      newValue=calc.current+value;
    }
    setCalc({current:newValue,
      total:calc.total,
      isInitial:false,
      preOp:calc.preOp,
      display: newValue});
  }

  function handleOperator(value){
    const total=doCalculation();
    setCalc({current:total.toString(),
      total:total.toString(),
      isInitial:true,
      preOp:value,
      display: total + " " + value
    });
  }

  function doCalculation(){
    let total=parseInt(calc.total);

    switch(calc.preOp){
      case '+':
        total+=parseInt(calc.current);
      break;
      case '-': 
      total-=parseInt(calc.current);
      break;
      case '*':
        total*=parseInt(calc.current);
      break;
      case '/':
        total/=parseInt(calc.current);
      break;
      default:
        total=parseInt(calc.current);
    }
    return total;
  }

  function handleClear(){
    setCalc({
      current:"0",
      total:"0",
      isInitial:true,
      preOp:"",
      display:"0"
    });
  }

  function Buttons(props) {
    return (
      <button className={props.className} onClick={() => props.onClick(props.value)}>
        {props.value}
      </button>
    );
  }
  

  function handleEqual(){
    let total=doCalculation(); 
    setCalc({current:total.toString(),
      total:total.toString(),
      isInitial:true,preOp:"",
      display: total.toString()
    });

  }

  function renderDisplay(){
    return calc.display; 
  }

  return(<div className="calculator">
  <div className="display">{renderDisplay()}</div>
  <Buttons value="9"onClick={handleNumber}/>
  <Buttons value="8"onClick={handleNumber}/>
  <Buttons value="7"onClick={handleNumber}/>
  <Buttons value="/"className="operator"onClick={handleOperator}/>

  <Buttons value="6"onClick={handleNumber}/>
  <Buttons value="5"onClick={handleNumber}/>
  <Buttons value="4"onClick={handleNumber}/>
  <Buttons value="*"className="operator"onClick={handleOperator}/>

  <Buttons value="3"onClick={handleNumber}/>
  <Buttons value="2"onClick={handleNumber}/>
  <Buttons value="1"onClick={handleNumber}/>
  <Buttons value="-" className="operator"onClick={handleOperator}/>

  <Buttons value="C"onClick={handleClear}/>
  <Buttons value="0"onClick={handleNumber}/>
  <Buttons value="="onClick={handleEqual}/> 
  <Buttons value="+" className="operator"onClick={handleOperator}/>

  </div>);
}
function Buttons(props){
  return <button className={props.className}onClick={()=>props.onClick(props.value)}>{props.value}</button>
}