const sumAll = function(numb1,numb2) {
    let sum=0
    if(typeof(numb1)!=typeof(numb2) || numb1<0 || numb2<0)
    {
        return "ERROR"
    }
    else if(typeof(numb1)==typeof(numb2))
    {
        if(numb1>numb2)
        {
            numb1=numb1+numb2
            numb2=numb1-numb2
            numb1=numb1-numb2
        }
        for (let i=numb1;i<=numb2;i++)
        {
            sum=sum+i
        }
        return sum
    }
    
    
};
sumAll(123,1)
// Do not edit below this line
module.exports = sumAll;
