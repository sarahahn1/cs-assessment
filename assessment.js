//1
//////////////
//runtime complexity: O(n^2)
//////////////
function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        let checkingNum = arr[i]
        for(let j = 0; j < arr.length;j++){
        let comparingNum = arr[j]
        if (checkingNum + comparingNum === 0) {
            return true
        }
    }
}
   return false
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

//2
/////////////////
//runtime complexity: O(n^2)
let word = "monday"
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

  console.log(hasUniqueChars("monday"))








// function isPangram(string) {

//     let strArr = string.toLowerCase();
//     let alphabet = 'abcdefghijklmnopqrstuvwxynz'.split ('');

//     for (let i = 0; i < alphabet.length; i++) {
//         if(strArr.indexOf(alphabet[1]) < 0) {
//             return false
//         }
//     }
//     return true
// }


//3
//////////////
//runtime complexity: O(n)
//////////////

function isPanagram(str) {
    let countObj = {
      a:0,
      b:0,
      c:0,
      d:0,
      e:0,
      f:0,
      g:0,
      h:0,
      i:0,
      j:0,
      k:0,
      l:0,
      m:0,
      n:0,
      o:0,
      p:0,
      q:0,
      r:0,
      s:0,
      t:0,
      u:0,
      v:0,
      w:0,
      x:0,
      y:0,
      z:0,
    }
    for(let i = 0; i < str.length; i++) {
        counterObj[str[i]]++
    }
    for (let countLetter in counterObj) {
        if (countObj[countLetter] === 0) {
            return false
        }
    }
    return true
}


console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False


//4
////////////////////
//runtime complexity: O(n)
////////////////////
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












