import { createRoot } from 'react-dom/client'
import { useState } from 'react'

const Btn1 = (props) => {
  const textte = () => {
    alert("hello world!");
  };

  return (
    <button onClick={textte}>{props.textTransform}</button>
  );
};

const Btn2 = (props) => {
  const coloor = () => {
    alert("hello world!");
  };

  return (
    <button onClick={coloor}>{props.color}</button>
  );
};

const Btn3 = (props) => {
  const sizze = () => {
    alert("hello world!");
  };

  return (
    <button onClick={sizze}>{props.size}</button>
  );
};

const EXo02 = () => {
  return (
    <>
      <div>
        <p>Up/Low :</p>
        <Btn1 textTransform="UPPERCASE" />
        <Btn1 textTransform="lowercase" />
      </div>

      <div>
        <p>Color :</p>
        <Btn2 color="Red" />
        <Btn2 color="Blue" />
        <Btn2 color="Green" />
        <Btn2 color="Yellow" />
      </div>

      <div>
        <p>Size :</p>
        <Btn3 size="Small" />
        <Btn3 size="Medium" />
        <Btn3 size="Large" />
      </div>

      <div>
        <h1>ABC</h1>
      </div>
    </>
  );
};

export default EXo02;
