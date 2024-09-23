import React from "react";

export default function Calc(){

const [calc,setCalc]=React.useState({
    current:"0",
    total:"0",
    isInitial:true
});

function handleNumber(value){
  let newValue=value;

  if(!calc.isInitial){
    newValue=calc.current+value;  
  }
  setCalc({current:newValue,total:calc.total,isInitial:false});  
  
}

function handleOperator(value){
}

function renderDisplay(){
  return calc.current;
}

  return(<div className="calculator">
    <div className="display">{renderDisplay()}</div>
  <Buttons value="7" onClick={handleNumber} />
  <Buttons value="8"onClick={handleNumber}/>
  <Buttons value="9"onClick={handleNumber}/>
  <Buttons value="/"className="operator" onClick={handleOperator}/>

  <Buttons value="4"onClick={handleNumber}/>
  <Buttons value="5"onClick={handleNumber}/>
  <Buttons value="6"onClick={handleNumber}/>
  <Buttons className="operator"onClick={handleOperator} value="*"/>

  <Buttons value="1"onClick={handleNumber}/>
  <Buttons value="2"onClick={handleNumber}/>
  <Buttons value="3"onClick={handleNumber}/>
  <Buttons className="operator"onClick={handleOperator} value="-"/>

  <Buttons value="C"onClick={handleNumber}/>
  <Buttons value="0"onClick={handleNumber}/>
  <Buttons value="="onClick={handleNumber}/>
  <Buttons className="operator"onClick={handleOperator} value="+"/>
  </div>);
}
function Buttons(props){
  return <button className={props.className} onClick={()=>props.onClick(props.value)}>{props.value}</button>
}