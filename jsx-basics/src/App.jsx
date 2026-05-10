import { useState } from "react";


// DAY 1 and 2 
// Character count and limit
function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Enter Name"
        maxLength={30}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>Character count : {text.length}</h3>
    </div>
  );
}

export default App;