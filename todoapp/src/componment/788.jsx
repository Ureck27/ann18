import { useState } from "react";

const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

const EXo02 = () => {
  const [text, setText] = useState("ABC");
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("32px");

  return (
    <>
      {/* Text */}
      <div>
        <p>Text :</p>
        <Button label="ABC" onClick={() => setText("ABC")} />
        <Button label="Hello" onClick={() => setText("Hello")} />
        <Button label="React" onClick={() => setText("React")} />
        <Button label="World" onClick={() => setText("World")} />
      </div>

      {/* Color */}
      <div>
        <p>Color :</p>
        <Button label="Red" onClick={() => setColor("red")} />
        <Button label="Blue" onClick={() => setColor("blue")} />
        <Button label="Green" onClick={() => setColor("green")} />
        <Button label="Purple" onClick={() => setColor("purple")} />
        <Button label="Orange" onClick={() => setColor("orange")} />
        <Button label="Black" onClick={() => setColor("black")} />
      </div>

      {/* Size */}
      <div>
        <p>Size :</p>
        <Button label="Small" onClick={() => setSize("16px")} />
        <Button label="Medium" onClick={() => setSize("32px")} />
        <Button label="Large" onClick={() => setSize("48px")} />
        <Button label="XL" onClick={() => setSize("64px")} />
      </div>

      {/* Result */}
      <div>
        <h1 style={{ color: color, fontSize: size }}>
          {text}
        </h1>
      </div>
    </>
  );
};

export default EXo02;

