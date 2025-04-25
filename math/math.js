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

// BRANCH COVERAGE EXAMPLE
export function isAdult(age){
    if(age >= 18) {
        return "Adult"
    } else {
        return "Minor"
    }
}

//PATH 
export function process(x, y){
    if (x > 0){
        if (y > 0){
            return "both x and y are positive"
        }else{
            return "x is positive" 
        }
    }else {
        return "x is not positive"
    }
}

//CONDITION COVERAGE
export function canDrive(age, hasLicense) {
    if(age >= 18 && hasLicense ) {
        return "Allowed to drive";
    } else {
        return "Not allowed to drive"
    }
}