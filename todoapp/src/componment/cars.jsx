import { createRoot } from 'react-dom/client'

function Car(props) {
    const carInfo = {
  name: "Ford",
  model: "Mustang",
  color: "red",
  year: 1969
};
  return (
    <>
      <h2>My {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>It is {props.carinfo.color} and it is from {props.carinfo.year}!</p>
    </>
  );
}
default export Car ;
