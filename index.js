let digits = []
let resultBtn = document.getElementById("=")
let clearBtn = document.getElementById("clear")
let operators = ["-", "+", "*", "/"]
for (let i = 0; i < 10; i++) {
    digits.push(i)
}

let operation = []


const onClick = (event) => {
    let a = event.target.id
    let numbersCond = digits.includes(parseInt(a)) && (operation.length === 0 || operation.length === 2)
    let operatorCond = operators.includes(a) && operation.length === 1

    if (operation.length === 1 && digits.includes(parseInt(a)) || (a === "." && !operation[0].includes("."))) {

        let l = operation.length - 1
        operation[l] = operation[l].concat(a)
        document.querySelector(".display").innerText += a

    }

    if (operation.length === 3 && digits.includes(parseInt(a)) || (a === "." && !operation[2].includes("."))) {

        let l = operation.length - 1
        operation[l] = operation[l].concat(a)
        document.querySelector(".display").innerText += a
    }

    

    if (operation.length === 3 && operators.includes(a)) {
        operation.push(a)
        document.querySelector(".display").innerText += a
    }

    if (numbersCond || operatorCond) {
        document.querySelector(".result").innerText = ""
        console.log("function fired")
        document.querySelector(".display").innerText += a
        operation.push(a)

    }


    console.log(operation)
    if (operation.length === 4) {

        if (!(operation[2] === "0" && operation[1] === "/")) {
            let r = operate(parseFloat(operation[0]), operation[1], parseFloat(operation[2]))

            operation = []
            operation.push(r)
            operation.push(a)
            console.log(operation)


        }
        else {
            resultBtn.addEventListener("click", function () {
                document.querySelector(".result").innerText = "You cannot divide by 0!"
                document.querySelector(".display").innerText = ""
                operation = []
            })
        }
    }
    else {
        if (!(operation[2] === "0" && operation[1] === "/")) {
            let r = operate(parseFloat(operation[0]), operation[1], parseFloat(operation[2]))

            if (!Number.isInteger(r)) {
                r = r.toFixed(3)
            }

            resultBtn.addEventListener("click", function () {
                document.querySelector(".result").innerText = r
                document.querySelector(".display").innerText = ""
                operation = []
            })
        }
         else {
            resultBtn.addEventListener("click", function () {
                document.querySelector(".result").innerText = "You cannot divide by 0!"
                document.querySelector(".display").innerText = ""
                operation = []
            })
        }

    }



}
window.addEventListener('click', onClick);



function add(a, b) {
    return (a + b)
}

function substract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    return (a / b)
}

function operate(a, o, b) {
    if (o === "+") {
        return (add(a, b))
    }
    else if (o === "-") {
        return (substract(a, b))
    }
    else if (o === "*") {
        return (multiply(a, b))
    }
    else if (o === "/") {
        return (divide(a, b))
    }
}

clearBtn.addEventListener("click", function () {
    operation = []
    document.querySelector(".display").innerText = ""
    document.querySelector(".result").innerText = ""
})