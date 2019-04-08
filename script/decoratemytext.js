function start(){
    setInterval(function(){
        let textArea2= window.document.getElementById("textArea");

        let size = window.getComputedStyle(textArea2,null).getPropertyValue('font-size');
        console.log(size);
        let font_size = parseFloat(size)+2;
        console.log(parseInt(font_size));
        textArea2.style.fontSize=font_size+'px';
    },500);
}
function checkBoxClicked(){
    let textArea= window.document.getElementById("textArea");
    let font = textArea.style.fontSize;
    let chckbox=window.document.getElementById("checkBox");
    let page = window.document.getElementById("container");
    console.log(window.document.getElementById("textArea").style);
    if(chckbox.checked){
        textArea.style.color="green";
        textArea.style.textDecoration="underline";
        page.style.backgroundImage="url('images/hundred-dollar-bill.jpg')";
    }
    else{
        textArea.style.color="black";
        textArea.style.textDecoration="none";
        page.style.backgroundImage="none";
    }

}
function igplay(){
    let textArea=window.document.getElementById("textArea");

    console.log(textArea.value);
    let str =textArea.value;
    str.replace(/\n|\t/g,'');
    console.log(str);
    str = str.split(' ');
    for(let i=0; i<str.length;i++){
        str[i]=piglatin(str[i]);
    }
    textArea.value=str;
}
function piglatin(str){
    return str
        .replace(/^([aeiouy])(._)/, '$1$2way')
        .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}
function init(){
    document.getElementById("button").onclick = start;
    document.getElementById("checkBox").onchange = checkBoxClicked;
    document.getElementById("igplay").onclick = igplay;
}
window.onload = init;

var x = 10;
function main() {
    console.log("x1 is:" + x);
    x = 20;
    console.log("x2 is:" + x);
    if (x > 0) {
        var x = 30;
        console.log("x3 is:" + x);
    }
    console.log("x4 is:" + x);
    var x = 40;
    var f = function(x) {
        console.log("x5 is:" + x);
    };
    f(50);
    console.log("x6 is:" + x);
}
main();
console.log("x7 is:" + x);