import React from 'react';

// Calculator component
export default function Calc(props) {
  return (
    <div className="calculator">
        {/* Row 1 */}
        <CalcButton value="7" />
        <CalcButton value="8" />
        <CalcButton value="9" />
        
      </div>
  );
}

function CalcButton(props) {
  return (
    <button>{props.value}</button>
  );
}
