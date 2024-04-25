const fibonacci = function(numb) {
    let value1=0
    let value2=1
    if(typeof(numb)==='string')
    {
        numb=+numb
    }
    if (numb < 0) return "OOPS";
    if (numb == 0) return 0;
    
    for (let i=1; i<numb ;i++)
    {
        value2=value2+value1
        value1=value2-value1
    }
    return value2
};

console.log(fibonacci("8"))
// Do not edit below this line
module.exports = fibonacci;

