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


