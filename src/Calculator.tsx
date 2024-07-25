import React, { useState } from "react";

const Calculator: React.FC = () => {
  // State for setting dog name
  const [dogName, setDogName] = useState("");
  // State for setting human age
  const [humanAge, setHumanAge] = useState<number | string>("");
  // State for setting dog age
  const [dogAge, setDogAge] = useState<number | null>(null);

  // Checks if string is a valid number
  const isNumber = (num: string): boolean => /^\d+$/.test(num);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevents page from refreshing when button is clicked
    event.preventDefault();

    // If age is a valid number, calculate human age to dog age, then set state
    if (typeof humanAge === "number" && humanAge > 0) {
      setDogAge(Number(Math.floor(16 * Math.log(humanAge) + 31)));
    } else {
      alert("Please enter a valid age");
    }
  };

  const handleAgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newAge = event.target.value;

    // If input is cleared, set human age to empty string
    if (newAge === "") {
      setHumanAge("");
    } else if (isNumber(newAge)) {
      // If the input is a valid number, update human age state
      setHumanAge(Number(newAge));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
      {dogAge && (
        <h2>
          {dogName ? dogName : "This dog"} is {dogAge} years old in dog years!
        </h2>
      )}
    </>
  );
};

export default Calculator;
