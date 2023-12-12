import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // Destructuring useState to get count and setCount
  let [count, setCount] = useState(0);

  return (
    <div>
      {/* Do not remove the main div */}
      <p>Button clicked {count} times</p>
      {/* Correcting onClick function */}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}
export default App;