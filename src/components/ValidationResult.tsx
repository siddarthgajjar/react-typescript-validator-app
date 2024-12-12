import React from "react";

interface ValidationResultProps {
  isValid: boolean | null;
}

const ValidationResult: React.FC<ValidationResultProps> = ({ isValid }) => {
  if (isValid === null) return null;

  return (
    <div className={`validation-result ${isValid ? "valid" : "invalid"}`}>
      {isValid ? "Valid SIN" : "Invalid SIN"}
    </div>
  );
};

export default ValidationResult;
