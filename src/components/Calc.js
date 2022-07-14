import React from "react";

function Calc() {
  return (
    <>
      <div className="outer">
        <div className="inner">
          <div className="top"></div>
          <div className="bottom">
            <div className="button percentage">%</div>
            <div className="button clear">c</div>
            <div className="button delete-one">X</div>
            <div className="button devide">/</div>
            <div className="button seven">7</div>
            <div className="button eight">8</div>
            <div className="button nine">9</div>
            <div className="button multiply">x</div>
            <div className="button four">4</div>
            <div className="button five">5</div>
            <div className="button six">6</div>
            <div className="button subtract">-</div>
            <div className="button one">1</div>
            <div className="button two">2</div>
            <div className="button three">3</div>
            <div className="button plus">+</div>
            <div className="button empty"></div>
            <div className="button zero">0</div>
            <div className="button period">.</div>
            <div className="button equal">=</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calc;
