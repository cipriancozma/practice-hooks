import React, { useEffect, useState } from "react";

function Effect() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.count("Effect runs!");
    document.title = `App title`;
  }, []);

  return (
    <div>
      <span>You clicked {number} times</span>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increase</button>
    </div>
  );
}

export default Effect;
