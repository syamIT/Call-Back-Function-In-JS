// Use callback functions and complete remaining arithmetic operations 

// (Multiplication remainders,division,etc--)

function operation(a,b,call){
    console.log(call(a,b));
}

function add(a,b){
    return a+b
}
operation(2,3,add)
function sub(a,b){
    return a-b
}
operation(2,3,sub)
function mul(a,b){
    return a*b
}
operation(2,3,mul)
function div(a,b){
    return a/b
}
operation(2,3,div)
function mod(a,b){
    return a%b
}
operation(2,3,mod)
function pow(a,b){
    return a**b
}
operation(2,3,pow)
