import React from "react";

export default function Calc(){
  return(<div className="calculator">
    <div className="display">0</div>
  <Buttons value="7"/>
  <Buttons value="8"/>
  <Buttons value="9"/>
  <Buttons value="/"/>

  <Buttons value="4"/>
  <Buttons value="5"/>
  <Buttons value="6"/>
  <Buttons value="*"/>

  <Buttons value="1"/>
  <Buttons value="2"/>
  <Buttons value="3"/>
  <Buttons value="-"/>

  <Buttons value="C"/>
  <Buttons value="0"/>
  <Buttons value="="/>
  <Buttons value="+"/>
  </div>);
}
function Buttons(props){
  return <button>{props.value}</button>
}