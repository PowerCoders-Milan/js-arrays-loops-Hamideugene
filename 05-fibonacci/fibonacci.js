// program to generate fibonacci series up to a certain number
const maxNumber = Math.ceil(Math.random()*200);
let n1 = 0, n2 = 1, nextTerm=0;
console.log(maxNumber);
for (let i= 1; nextTerm <= maxNumber ; i++) {
    console.log(`numero 1 = ${n1}`);
    console.log(`numero 2 = ${n2}`);
    nextTerm = n1 + n2;
    console.log(`numero successivo ${nextTerm}`);
    n1 = n2 ; 
    n2 = nextTerm;
}



