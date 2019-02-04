

// Determine if a string has all unique characters
// not usuing aditional data structures
// nieve solution
// Time complexity: O(n^2)
// Space complexity: O(n)

function isUnique() {     
    let str = document.getElementById("isUniqueStr").value
    if(!str)return console.log(true)
    let length = str.length
    if(length === 0 || length === 1) return console.log(true)
    for(let i=0; i< length-1; i++ ){
        for(let j=i+1; j< length; j++){
            if(str[i] === str[j]) return console.log(false)
        }
    }
    return console.log(true)
}

// Given 2 strings, determine if they are permutations of eachother
// nieve solution
// Time complexity: 
// Space complexity: 

function checkPermutation(){
    let str1 = document.getElementById("checkPermutationStr1").value.trim().toLowerCase().split('').sort()
    let str2 = document.getElementById("checkPermutationStr2").value.trim().toLowerCase().split('').sort()

    if (str1.length != str2.length) return console.log(false)
    return console.log(JSON.stringify(str1) === JSON.stringify(str2))
}

function URLifySetup(){
    let input = document.getElementById("URLifyInput").value

}

function URLify(input, size) {
    
}

function isUniqueTest() {
    console.log('aa', this.isUnique('aa'), 'Solution: false')
    console.log('abc', this.isUnique('abc'), 'Solution: true')
    console.log('abcdefa', this.isUnique('abcdefa'), 'Solution: false')
    console.log('', this.isUnique(''), 'Solution: true')
    console.log('empty',this.isUnique(), 'Solution: true')
}

function checkPermutationTest(){
    console.log('cat, tac', this.checkPermutation('cat', 'tac'))
    console.log('aa, aa', this.checkPermutation('aa', 'aa'))
    console.log('a, a', this.checkPermutation('a', 'a'))
    console.log('abc, abd', this.checkPermutation('abc', 'abd'))

}

