var btnTranslate = document.querySelector("#btn-translate");
var txtArea = document.querySelector("#txtArea");
var outputDiv = document.querySelector("#div-output");
btnTranslate.addEventListener("click",function clickEventHandler() {
    outputDiv.innerText = "hlaa jhaa hu kanu cha to " + txtArea.value; 
})