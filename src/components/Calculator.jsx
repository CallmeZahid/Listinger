import React, { useState } from "react";

const Calculator = ({ onClose }) => {
  const [input, setInput] = useState("");

  // Update input when a number or operator is clicked
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Perform calculation when "=" button is clicked
  const calculate = () => {
    try {
      setInput(eval(input).toString()); // Perform the calculation
    } catch (error) {
      setInput("Error");
    }
  };

  // Clear the input when "C" button is clicked
  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white p-8 rounded-xl shadow-2xl w-80 z-50">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 text-2xl font-bold hover:text-red-500 transition-all"
      >
        &times;
      </button>

      {/* Calculator Display */}
      <div className="mb-4 p-4 bg-gradient-to-r from-blue-300 to-blue-500 text-right text-3xl font-bold text-white rounded-md shadow-inner">
        {input || "0"}
      </div>

      {/* Calculator Buttons */}
      <div className="grid grid-cols-4 gap-2">
        {/* Row 1 */}
        <button onClick={() => handleButtonClick("1")} className="btn">1</button>
        <button onClick={() => handleButtonClick("2")} className="btn">2</button>
        <button onClick={() => handleButtonClick("3")} className="btn">3</button>
        <button onClick={() => handleButtonClick("+")} className="btn-operator">+</button>
        
        {/* Row 2 */}
        <button onClick={() => handleButtonClick("4")} className="btn">4</button>
        <button onClick={() => handleButtonClick("5")} className="btn">5</button>
        <button onClick={() => handleButtonClick("6")} className="btn">6</button>
        <button onClick={() => handleButtonClick("-")} className="btn-operator">-</button>
        
        {/* Row 3 */}
        <button onClick={() => handleButtonClick("7")} className="btn">7</button>
        <button onClick={() => handleButtonClick("8")} className="btn">8</button>
        <button onClick={() => handleButtonClick("9")} className="btn">9</button>
        <button onClick={() => handleButtonClick("*")} className="btn-operator">*</button>
        
        {/* Row 4 */}
        <button onClick={() => handleButtonClick("0")} className="btn">0</button>
        <button onClick={clearInput} className="btn-clear">C</button>
        <button onClick={calculate} className="btn-equal">=</button>
        <button onClick={() => handleButtonClick("/")} className="btn-operator">/</button>
      </div>
    </div>
  );
};

export default Calculator;
