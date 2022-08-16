import React from "react";

function JSInterview() {
  function promiseAll(promises) {
    const outputs = [];
    let settledPromiseCounter = 0;
    return new Promise((resolve, reject) => {
      promises.forEach((promise, i) => {
        promise
          .then((value) => {
            outputs[i] = value;
            settledPromiseCounter++;
            if (settledPromiseCounter === promises.length) {
              resolve(outputs);
            }
          })
          .catch(reject);
      });
    });
  }

  const promises = [Promise.resolve(2)];
  //   const result = promiseAll(promises).then(console.log);
  //   console.log(result);

  // check if a value is deep equal to another value
  function deepEquals(valueOne, valueTwo) {
    //primitives logic
    if (typeof valueOne !== "object" && typeof valueTwo !== "object") {
      const isValueOneNaN = isNaN(valueOne) && typeof valueOne === "number";
      const isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo === "number";

      if (isValueOneNaN && isValueTwoNaN) return true;
      return valueOne === valueTwo;
    }

    if (typeof valueOne !== typeof valueTwo) return false;

    if (valueOne === null && valueTwo === null) return true;
    if (valueOne === null || valueTwo === null) return false;

    if (valueOne === valueTwo) return true;

    // arrays logic
    if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
      if (valueOne.length !== valueTwo.length) return false;

      for (let i = 0; i < valueOne.length; i++) {
        if (!deepEquals(valueOne[i], valueTwo[i])) return false;
      }
      return true;
    }

    if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;

    // objects logic
    const valueOneKeys = Object.keys(valueOne);
    const valueTwokeys = Object.keys(valueTwo);

    if (valueOneKeys.length !== valueTwokeys.length) return false;
    if (!deepEquals(valueOneKeys, valueTwokeys)) return false;

    if (!deepEquals(valueOneKeys, valueTwokeys)) return false;

    for (let i = 0; i < valueOneKeys.length; i++) {
      const key = valueOneKeys[i];
      const valueOneValue = valueOne[key];
      const valueTwoValue = valueTwo[key];
      if (!deepEquals(valueOneValue, valueTwoValue)) return false;
    }

    return true;
  }

  function getTimer(isoDate, timerInfo) {
    const date = new Date(isoDate);
    setInterval(() => {
      const timeTillDate = date - Date.now();
      const seconds = Math.floor(timeTillDate / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      timerInfo.seconds = seconds % 60;
      timerInfo.minutes = minutes % 60;
      timerInfo.hours = hours;
    }, 500);
  }

  const timerInfo = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  //   console.log(getTimer("2022-06-02T00:00:00.000-07:00", timerInfo));

  return <div>JSInterview</div>;
}

export default JSInterview;
