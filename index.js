// Code your solution here

const findMatching = function(arr,str){
 return arr.filter((el) => el.toLowerCase().includes(str.toLowerCase()))
}

const fuzzyMatch = function(arr,str){
  return  arr.filter(function firstN(arr) {
    return arr.indexOf(str) === 0;
  })
}

const matchName = function(arr,str) {
    return  arr.filter(function firstN(arr) {
        return arr.name === str;
      })
    }
    