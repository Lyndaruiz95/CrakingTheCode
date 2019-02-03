
class StringsAndArrays {

    // Determine if a string has all unique characters
    // not usuing aditional data structures
    // nieve solution
    // Time complexity: O(n^2)
    // Space complexity: O(n)
    
    isUnique(str) {
        if(!str)return false
        let length = str.lenth
        if(lenth === 0 || lenth === 1) return true
        for(i in lenth-2){
            for(j in lenth-1){
                if(str[i] === str[j]) return false
            }
        }
        return true
    }

    isUniqueTest() {
        console.log('aa', this.isUnique('aa'))
        console.log('abc', this.isUnique('abc'))
        console.log('abcdefa', this.isUnique('abcdefa'))
        console.log('', this.isUnique(''))
        console.log('empty',this.isUnique())
    }

    // Given 2 strings, determine if they are permutations of eachother
    // nieve solution
    // Time complexity: 
    // Space complexity: 
    checkPermutation(str1, str2){

    }

    checkPermutationTest(){
        console.log('cat, tac', this.checkPermutation('cat', 'tac'))
        console.log('aa, aa', this.checkPermutation('aa', 'aa'))
        console.log('a, a', this.checkPermutation('a', 'a'))
        console.log('abc, abd', this.checkPermutation('abc', 'abd'))

    }

}

