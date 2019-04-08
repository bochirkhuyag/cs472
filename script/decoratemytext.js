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