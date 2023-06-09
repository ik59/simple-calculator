var input = document.getElementById("calc-output");
var clear = document.querySelector(".clear");
var del = document.querySelector(".delete")
var numLen = document.querySelectorAll(".num").length;
var operandLength = document.querySelectorAll(".operand").length;
var equal = document.querySelector(".equals");

for(var x = 0; x < numLen; x++) {

    var num = document.querySelectorAll(".num")[x];
    num.addEventListener("click", function() {
        num = this.innerHTML
        input.innerHTML = input.innerHTML + num;
        
    })
}

for(var x=0; x<operandLength; x++) {
    var operand = document.querySelectorAll(".operand")[x]
    operand.addEventListener("click", function() {
        operand = this.innerHTML;
        input.innerHTML = input.innerHTML + operand
    })
}

clear.addEventListener("click", function () {
    input.innerHTML = " "
})

del.addEventListener("click", function() {
    input.innerHTML = input.innerHTML.slice(0, -1)
})


equal.addEventListener("click", function() {
    input.innerHTML = eval(input.innerHTML)
})



