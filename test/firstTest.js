import { should } from "chai";

import { getDiscountPrice, getTotalPrice, greet, isAdult, process } from "../math/math.js";

should()

//testing

//describe has title and it has assertion statement
// describe("Testing math function", function(){
    // it("should return 10 for addTwo(5, 5)", function(){
    //     const result = addTwo(5,5)
    //     result.should.equal(10)
    // })

//     it("should return 105 for getTotalPrice(100, 5)", function(){
//         const result = getDiscountPrice(100, 10, 10);
//         // const result = getTotalPrice(100, 5);
//         result.should.equal(100);
//         // result.should.equal(105);
//     })

// })

//STATEMENT COVERAGE

// describe("Statement Coverage", function(){
//     it("should return Hi! Alice for greet(Alice)", function(){
//         const result = greet("Alice")
//         result.should.equal("Hi! Alice")
//     })

//     it("should return error for greet()", function(){
//         const result = greet()
//         result.should.equal("Hi! Alice")
//     })
// })

// BRANCH COVERAGE EXAMPLE
// describe("Branch Coverage", function(){
//     it("should return Adult for isAdult(20)", function(){
//         const result = isAdult(20)
//         result.should.equal("Adult")
//     })

//     it("should return Minor for isAdult(15)", function(){
//         const result = isAdult(15)
//         result.should.equal("Minor")
//     })
// })

//PATH COVERAGE
describe("Path Coverage", function(){
    it("should return both x and y are positive", function(){
        const result = process(5, 5)
        result.should.equal("both x and y are positive")
    })
    it("should return x is positive", function(){
        const result = process(5, -1)
        result.should.equal("x is positive")
    })
    it("should return x is not positive", function(){
        const result = process(-3, 5)
        result.should.equal("x is not positive")
    })
})