function add(numbers) {
    console.log("Input to add function:", numbers);
  
    
    numbers = numbers.replace(/"/g, '').trim();
  
    if (!numbers) return 0; 
  
    let delimiter = /,|\n/; 
    let numbersString = numbers;

    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
      if (delimiterMatch) {
        delimiter = new RegExp(`[${delimiterMatch[1]}\n]`); 
        numbersString = numbers.slice(delimiterMatch[0].length);
      }
    }
  
    console.log("Delimiter used:", delimiter); 
    console.log("Numbers string after delimiter handling:", numbersString);
  
    const numArray = numbersString
      .split(delimiter)
      .map(num => {
        num = num.trim(); 
        console.log("Raw split part before parsing:", num);
        const parsedNum = parseFloat(num);
        console.log("Parsed number:", parsedNum); 
        return parsedNum;
      })
      .filter(num => !isNaN(num)); 
  
    console.log("Final array of numbers:", numArray);
  
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }
  
    return numArray.reduce((sum, num) => sum + num, 0); 
  }
  
  module.exports = add;
  