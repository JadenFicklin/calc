import React, { useState } from "react";

function Calc() {
  const [holdNum, setHoldNum] = useState("");

  const addNumber = (num) => {
    setHoldNum(`${holdNum + num} `);
  };

  const clearCalc = () => {
    setHoldNum(``);
  };

  return (
    <>
      <div className="outer">
        <div className="inner">
          <div className="top">{holdNum}</div>
          <div className="bottom">
            <div className="button percentage">%</div>
            <div className="button clear" onClick={() => clearCalc()}>
              c
            </div>
            <div className="button delete-one">X</div>
            <div className="button devide">/</div>
            <div className="button seven" onClick={() => addNumber(7)}>
              7
            </div>
            <div className="button eight" onClick={() => addNumber(8)}>
              8
            </div>
            <div className="button nine" onClick={() => addNumber(9)}>
              9
            </div>
            <div className="button multiply">x</div>
            <div className="button four" onClick={() => addNumber(4)}>
              4
            </div>
            <div className="button five" onClick={() => addNumber(5)}>
              5
            </div>
            <div className="button six" onClick={() => addNumber(6)}>
              6
            </div>
            <div className="button subtract">-</div>
            <div className="button one" onClick={() => addNumber(1)}>
              1
            </div>
            <div className="button two" onClick={() => addNumber(2)}>
              2
            </div>
            <div className="button three" onClick={() => addNumber(3)}>
              3
            </div>
            <div className="button plus">+</div>
            <div className="button empty"></div>
            <div className="button zero" onClick={() => addNumber(0)}>
              0
            </div>
            <div className="button period">.</div>
            <div className="button equal">=</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calc;
