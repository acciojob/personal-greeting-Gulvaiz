
import React, { useState } from "react";
import './../styles/App.css';


const App = () => {

  const [name,setName] = useState("")

  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="ip">Enter your name:</label>
        <input onChange={(e) => {
              setName(e.target.value)
        }} id="ip"/>
        
        {name && <p>Hello {name}!</p>}
      
    </div>
  )
}

export default App
