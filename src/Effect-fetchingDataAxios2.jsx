import axios from "axios";
import { useCallback, useState } from "react";

const FetchingDatawithAxiosExercise = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const fetchData = useCallback(() => {
    if (name === "") alert("Enter a name...");
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setAge(res.data.age);
    });
  }, [name]);

  return (
    <div>
      <input
        placeholder="Enter a name..."
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={fetchData}>Predict Age</button>
      <p>Predicted Age: {age}</p>
    </div>
  );
};

export default FetchingDatawithAxiosExercise;
