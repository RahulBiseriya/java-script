// console.log(1<3)
// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

// the reason is that equality check ==  comparisons > < > =
//  < = work differently .
// comparisons convert null to a number, treating  it as 0
// that's why (3) null >=  is true  and  (1)  null > 0 is false
console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)
