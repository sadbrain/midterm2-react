import React, {useState} from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRainning, setIsRainning] = useState(false);

  function onSunClick() {
    setIsRainning(false)
    // Complete this code when we click on Sunny Time
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setIsRainning(true)
  
  }

  function getTitle() {
    return isRainning ? "RAIN TIME!" : "SUN TIME!"

    // This function manage the H1 text, depending on the weather
  }

  function getBackgroundColor() {
    return isRainning ? "rainy" : "sunny"
    // This function manage the main class value, depending on the weather
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
