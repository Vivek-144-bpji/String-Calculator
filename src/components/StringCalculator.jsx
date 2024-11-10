import React, { useState } from 'react';
import add from '../add'; 

function StringCalculator() {
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState(null); 
  const [error, setError] = useState('');

  const calculateSum = () => {
    try {
      setError('');
      setResult(null);

      
      const sanitizedInput = input.replace(/"/g, '').trim();

      console.log("Input before calling add:", sanitizedInput); 

      const sum = add(sanitizedInput);
      setResult(sum); 
      console.log("Result from add function:", sum); 

    } catch (e) {
      setError(e.message); 
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">String Calculator</h2>
      <input
        type="text"
        placeholder='Enter numbers (e.g., 1,2,3 or //;\n1;2)'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={calculateSum}
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
      >
        Calculate
      </button>
      {error && (
        <div className="mt-4 text-red-600">
          <strong>Error:</strong> {error}
        </div>
      )}
      {result !== null && !error && (
        <div className="mt-4 text-green-600">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
}

export default StringCalculator;
