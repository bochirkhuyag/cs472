function max(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
function maxOfThree(a,b,c){
    if(a>b && a>c) return a;
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}
function isVowel(a){
    let vowel="AOEIU";
    let char=a.charAt(0);
    if(vowel.includes(char.toUpperCase())) return true;
    else return false;
}
function sum(total,num){
    return total+num;
}
function multiply(total,num){
    return total*num;
}
function reverse(str){
    return str.toString().split('').reverse().join('');
}
function findLongestWord(arrayOfWords){
    let length =0;
    for(let i=0;i<arrayOfWords.length;i++){
        if(length < arrayOfWords[i].length) length=arrayOfWords[i].length;
    }
    return length;
}
function filterLongWords(arrayOfWords,min){
    let arrayOfLongWords=[];
    for(let i=0;i<arrayOfWords.length;i++){
        if(arrayOfWords[i].length>min) arrayOfLongWords.push(arrayOfWords[i]);
    }
    return arrayOfLongWords;
}
function jsfiddle(arrayOfNums){
    let res=[];
    const b= arrayOfNums.map(function(elem,i,array){
        return elem*10;
    });
    const c=arrayOfNums.filter(function(elem,i,array){
        return elem==3;
    });
    const d = arrayOfNums.reduce(function(elem,i){
        return elem*i;
    })
    for(let i=0;i<b.length;i++){
        res.push(b[i]);
    }

    for(let i=0;i<c.length;i++){
        res.push(c[i]);
    }
    res.push(d);
    return res;
}



function myFunctionTest(arg1,arg2){

    if (arg1.length !== arg2.length) return "TEST FAILED";
    for(let i=arg1.length;i--;){
        if(arg1[i]!==arg2[i]) return "TEST FAILED";
    }
    return "TEST SUCCEEDED";
}
console.log("Expected output of max(20,10) is 20 and " +myFunctionTest(20,max(20,10)));
console.assert(myFunctionTest(20,max(20,10)),"TEST 1 failed");
console.log("Expected output of maxOfThree(20,10,30) is 30 and " +myFunctionTest(30,maxOfThree(30,20,10)));
console.assert(myFunctionTest(30,maxOfThree(30,20,10)),"TEST 2 failed");
console.log("Expected output of isVowel(A) is true and " +myFunctionTest(true,isVowel('A')));
console.assert(myFunctionTest(true,isVowel('A')),"TEST 3 Failed");
let array= new Array(1,2,3,4);
console.log("Expected output of sum([1,2,3,4]) is 10 and " +myFunctionTest(10,array.reduce(sum)));
console.assert(myFunctionTest(10,array.reduce(sum)),"TEST 4 Failed");
console.log("Expected output of multiply([1,2,3,4]) is 24 and " +myFunctionTest(24,array.reduce(multiply)));
console.assert(myFunctionTest(24,array.reduce(multiply)),"TEST 5 Failed");
console.log("Expected output of reverse('jag testar') is 'ratset gaj' and " +myFunctionTest('ratset gaj',reverse('jag testar')));
console.assert(myFunctionTest('ratset gaj',reverse('jag testar')),"TEST 6 Failed");
let word_array = ['jag testar','asdf','asdfasdf'];
let result_array=["jag testar","asdfasdf"];
console.log("Expected output of findLongestWord('jag testar','asdf','asdfasdf') is 10 and " +myFunctionTest(10,findLongestWord(word_array)));
console.assert(myFunctionTest(10,findLongestWord(word_array)),"TEST 7 Failed");
console.log("Expected output of filterLongWords(['jag testar','asdf','asdfasdf'],5) is ('jag testar','asdfasdf') and " + myFunctionTest(result_array,filterLongWords(word_array,5)));
console.assert(myFunctionTest(result_array,filterLongWords(word_array,5)),"TEST 8 Failed");
let res_array=[10,20,30,40,3,24];
console.log("Expected output  of a) multiply by 10 b)element equal to 3 c) product of all elements jsfiddle(['1,2,3,4']) is ('10,20,30,40,3,24') and " + myFunctionTest(res_array,jsfiddle(array)));
console.assert(myFunctionTest(res_array,jsfiddle(array)),"TEST 9 Failed");