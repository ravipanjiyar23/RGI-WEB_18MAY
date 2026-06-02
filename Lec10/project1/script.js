const buttons = document.querySelectorAll(".digits");
const output = document.querySelector(".output");

let firstNumber = "";
let secondNumber = "";
let operator = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        console.log(value)

        if (value === "+" || value === "-" || value === "*" || value === "/") {
            operator = value;
            console.log("operator" , operator)
            // firstNumber = calculate(firstNumber, operator, secondNumber);
            // secondNumber= ""
            output.innerText = firstNumber + operator;
        }
        else if (value === "=") {
            const result = calculate(firstNumber, operator, secondNumber);
            console.log(result);
            output.innerText = result;

            firstNumber = result.toString();
            secondNumber = "";
            operator = "";
        }
        else {
            if (operator === "") {
                firstNumber += value;
                output.innerText = firstNumber;
            } else {
                secondNumber += value;
                output.innerText = firstNumber + operator + secondNumber;
            }
        }
    });
});

function calculate(a, op, b) {
    a = Number(a);
    b = Number(b);

    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return 0;
    }
}