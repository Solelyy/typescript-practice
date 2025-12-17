/*
Create a union type Payment
Cash → { type: "cash"; amount: number }
Card → { type: "card"; cardNumber: string }
*/

type Cash = {
    type: "cash",
    amount: number
}

type Card = {
    type: "card",
    cardNumber: string
}

type Payment = Cash | Card;

/*
Create a function processPayment
Accepts Payment
If cash → log amount
If card → log masked card number (****1234)
*/


function processPayment (payment: Payment) : void {
    if (payment.type === "cash") {
        console.log(payment.amount);
    } else {
        console.log(maskCardNum(payment.cardNumber));
    }
}

function maskCardNum(value: string, visible = 4):string {
    if (value.length <= visible) return value;
    return "*".repeat(value.length - visible) + value.slice(-visible);
}