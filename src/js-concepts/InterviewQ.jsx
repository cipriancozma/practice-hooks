import React, { useEffect, useState } from 'react'

function InterviewQ() {
    const [data, setData] = useState([]);
    const [item, setItem] = useState(0);

    const endpointData = [
        { name: "John Smith", value: "203.80" },
        { name: "John Smith", value: "1.00" },
        { name: "John Smith", value: 99.34 },
        { name: "John Smith", value: null },
        { name: "John Smith", value: 1000000},
        { name: "John Smith", value: undefined},
        { name: "John Smith", value: ""},
        { name: "John Smith", value: 0 },
    ];

    const endpointCall = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(endpointData), 1000);
        }).then(result => setData(result)).catch(err => console.log(err));
    }

    useEffect(() => {
        endpointCall()
    }, [])
    

  return (
    <div>
        <ul>
            {data.map((el, idx) => {
                return <li key={idx}>Row: {idx + 1}, Name: {el.name}, Balance: {el.value ? el.value : "[Error]"} {el.value < item ? "Low Balance" : ""} </li>
            })}
        </ul>
        <input type={"number"} onChange={(e) => { setItem(e.target.value) }} value={item}/>
    </div>
  )
}

export default InterviewQ