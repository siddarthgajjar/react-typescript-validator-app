import React, { useState } from "react";
import SinInput from "./components/SinInput";
import ValidationResult from "./components/ValidationResult";

const App: React.FC = () => {
  const [sin, setSin] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  /**
   * Validates a given SIN (Social Insurance Number) input.
   * The input must be a 9-digit number, and the function checks if the SIN is valid based on the Luhn algorithm.
   *
   * @param {string} input - The input string representing a SIN to validate.
   */
  const validateSin = (input: string) => {
    // Check if the input is exactly 9 digits long.
    if (!/^\d{9}$/.test(input)) {
      setIsValid(false); // Invalid if the input doesn't match the 9-digit format.
      return;
    }

    let sum = 0;

    // Loop through each digit of the SIN.
    for (let i = 0; i < input.length; i++) {
      let single_digit = parseInt(input[i]);

      // If the current index is odd (1-based index), double the digit.
      if (i % 2 === 1) {
        single_digit *= 2;

        // If doubling the digit results in a value greater than 9, subtract 9 from it.
        if (single_digit > 9) single_digit -= 9;
      }

      // Add the digit to the running sum.
      sum += single_digit;
    }

    // If the sum is divisible by 10, the SIN is valid.
    setIsValid(sum % 10 === 0);
  };


  const handleInputChange = (value: string) => {
    setSin(value);
    if (value.length === 9) {
      validateSin(value);
    } else {
      setIsValid(null);
    }
  };

  return (
    <div className="app">
      <h1>SIN Validation App</h1>
      <SinInput sin={sin} onInputChange={handleInputChange} />
      <ValidationResult isValid={isValid} />
    </div>
  );
};

export default App;
