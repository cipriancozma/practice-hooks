import { useEffect, useState } from "react";

export const Text = () => {
  const [text, setText] = useState("");
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    console.log("COMPONENT MOUNTED!");
  }, []);

  //   useEffect(() => {
  //     console.log("COMPONENT MOUNTED!");
  //   }, [text]); // it will trigger everytime when text/state changes

  return (
    <>
      <div>
        <button onClick={() => setShowText(!showText)}>Show Text</button>
      </div>
      <div>
        {showText && (
          <>
            <input onChange={(e) => setText(e.target.value)} />
            <h1> {text} </h1>
          </>
        )}
      </div>
    </>
  );
};
