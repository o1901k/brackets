module.exports = function check(str, bracketsConfig) {
     let brackets = bracketsConfig.join('').replace(/,/g, '');
      let array = [];
  for (let bracket of str) {
          let bracketsIndex = brackets.indexOf(bracket)
          if (bracketsIndex % 2 === 0) {
              if (bracket === brackets[bracketsIndex + 1] && array[array.length - 1] === bracketsIndex){
                  array.pop();
              } else if (bracket === brackets[bracketsIndex + 1] && array[array.length - 1] !== bracketsIndex) {
                  array.push(bracketsIndex)
              }
              else{
                  array.push(bracketsIndex)
              }
          } 
          else {
            if (array.pop() !== bracketsIndex-1) {
                  return false;
              }
          }
      }
      return array.length === 0
  }
