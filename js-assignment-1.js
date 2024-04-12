// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    // Write your code here
    let largest=-Infinity;
    let secondLargest=-Infinity;
    for (let i=0;i<array.length;i++){
      if (array[i]>largest){
        secondLargest=largest;
        largest=array[i];
      }
      else if (array[i]>secondLargest && array[i]!==largest){
        secondLargest=array[i];
      }
    }
    return secondLargest;
  }
  
  // Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
  function calculateFrequency(string) {
    // Write your code here
      const frequencies=new Array(26).fill(0);
      
      for(let i=0;i<string.length;i++){
        const charCode=string.charCodeAt(i);
        if (charCode>=97 && charCode<=122){
          frequencies[charCode-97]++;
        }
      }
      const answer={};
      for(let i=0;i<26;i++){
        const char=String.fromCharCode(i+97);
        if (frequencies[i]>0){
          answer[char]=frequencies[i];
        }
      }
      return answer;
  }
  
  // Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
  function flatten(unflatObject) {
    // Write your code here
    const flatObject = {};
    
      function flattenHelper(obj, prefix = '') {
        for (const key in obj) {
          if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            flattenHelper(obj[key], prefix + key + '.');
          } else if (Array.isArray(obj[key])) {
            obj[key].forEach((item, index) => {
              flattenHelper(item, prefix + key + '.' + index + '.');
            });
          } else {
            flatObject[prefix + key] = obj[key];
          }
        }
      }
      flattenHelper(unflatObject);
    return flatObject;
  }
  
  // Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
  function unflatten(flatObject) {
    // Write your code here
  }
  