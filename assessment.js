


function addToZero(num) {
    for (let i = 0; i < num.length; i++) {
        for(let j = i + 1; j < num.length; j++) {
            if (num[i] - num[j] === 0) {
                return true
            } else { 
                return false 
            }
        }
    }
   
}
console.log(addToZero([2,2]))//true
console.log(addToZero([3,4]))//false










// let word = "monday"
// function hasUniqueChars(word) {
//     let uniqueChars = new Set([])
//     for (let i = 0; i < word.length; i++) {
//       uniqueChars.add(word[i])
//     }  if (word[i] === word.length === true)
//     {
//     return uniqueChars.size === word.length
//     }
//   }

let word = "monday"
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

  console.log(hasUniqueChars("monday"))








function isPangram(string) {

    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxynz'.split ('');

    for (let i = 0; i < alphabet.length; i++) {
        if(strArr.indexOf(alphabet[1]) < 0) {
            return false
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False



function findLongestWord(arr) {
    let word = "";
    for (let i = 0 ; i < arr.length; i++){
        if(word.length < arr[i].length) {
            word = arr[i]
        }
    }
return word.length
}

console.log(findLongestWord(["hi", "hello"]));












