import React from "react";

export default function Calc(){
function handleNumber(){
alert("Clicked");
}
function handleOperator(){

}

  return(<div className="calculator">
    <div className="display">0</div>
  <Buttons value="7" onClick={handleNumber} />
  <Buttons value="8"onClick={handleNumber}/>
  <Buttons value="9"onClick={handleNumber}/>
  <Buttons value="/"className="operator" onClick={handleOperator}/>

  <Buttons value="4"onClick={handleNumber}/>
  <Buttons value="5"onClick={handleNumber}/>
  <Buttons value="6"onClick={handleNumber}/>
  <Buttons value="*"className="operator"onClick={handleOperator}/>

  <Buttons value="1"onClick={handleNumber}/>
  <Buttons value="2"onClick={handleNumber}/>
  <Buttons value="3"onClick={handleNumber}/>
  <Buttons value="-"className="operator"onClick={handleOperator}/>

  <Buttons value="C"onClick={handleNumber}/>
  <Buttons value="0"onClick={handleNumber}/>
  <Buttons value="="onClick={handleNumber}/>
  <Buttons value="+"className="operator"onClick={handleOperator}/>
  </div>);
}
function Buttons(props){
  return <button className={props.className} onClick={props.onClick}>{props.value}</button>
}