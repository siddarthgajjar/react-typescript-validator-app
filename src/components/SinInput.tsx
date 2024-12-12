import React from "react";

interface SinInputProps {
  sin: string;
  onInputChange: (value: string) => void;
}

const SinInput: React.FC<SinInputProps> = ({ sin, onInputChange }) => {
  return (
    <div className="sin-input">
      <label htmlFor="sin">Enter SIN:</label>
      <input
        type="text"
        id="sin"
        value={sin}
        onChange={(e) => onInputChange(e.target.value)}
        maxLength={9}
        placeholder="123456789"
      />
    </div>
  );
};

export default SinInput;
