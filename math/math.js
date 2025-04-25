// export function addTwo(num1, num2) {
//     return num1 + num2 
// }

// intergration testing org

export function getTotalPrice(price, taxRate) { //
    const taxToPay = (price * taxRate) / 100
    return price + taxToPay
}

export function getDiscountPrice(price, taxRate, discount){
    return getTotalPrice(price, taxRate) - (price * discount / 100)
}

// STATEMENT COBERAGE EXAMPLE
export function greet(name){
    return `Hi! ${name}`
}