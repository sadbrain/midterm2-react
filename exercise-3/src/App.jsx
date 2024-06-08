import React, {useState} from "react";

function App() {
  const [numA, setnumA] = useState(0);
  const [numB, setnumB] = useState(0);
  const [result, setResult] = useState("")
  const handleCompute = () => {
    if(!Number(numA)){
      setResult("A and B shall be number!")
    }
    if(!Number(numB)){
      setResult("A and B shall be number!")
    }
    else{
      setResult((Number(numA) + Number(numB)).toString())

    }
  }
  const onA = (e) => {
    setnumA(e.target.value)
  }
  const onB = (e) => {
    setnumB(e.target.value)
    
  }
  console.log(result)
  /* You will need to use many state to keep the inut values and other needs */

  /* You will need some function to handle the key pressed and button events */
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={result} disabled />
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
