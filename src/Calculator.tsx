import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [dogName, setDogName] = useState("");
  const [humanAge, setHumanAge] = useState<number | string>("");

  const isNumber = (num: string): boolean => /^\d+$/.test(num);

  const handleAgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newAge = event.target.value;

    if (newAge === "") {
      setHumanAge("");
    } else if (isNumber(newAge)) {
      setHumanAge(Number(newAge));
    }
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Dog Name</label>
          <input
            type="text"
            id="dog-name"
            value={dogName}
            placeholder="Enter Dog Name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setDogName(event.target.value)
            }
          ></input>
        </div>
        <div>
          <label htmlFor="age">Human Age</label>
          <input
            type="number"
            id="human-age"
            value={humanAge}
            placeholder="Enter Human Age"
            onChange={handleAgeChange}
          ></input>
        </div>
      </form>
    </>
  );
};

export default Calculator;
