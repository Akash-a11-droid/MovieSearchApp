import React, {useState} from 'react';

const Bulb = () => {
  const glowing = "glowing.png";
  const not_glowing = "not_glowing.png";
  const [currState, setBulbState] = useState(not_glowing);

  const handleClick = () => {
    setBulbState((currState)=>{
      return(currState === not_glowing ? glowing: not_glowing);
    })
  };

  return (
    <div>
      <h1>click to make it glow</h1>
      <img className="bulb" src={currState} alt="Bulb" />
      <button onClick={handleClick}>Toggle bulb</button>
    </div>
  );
}

export default Bulb;