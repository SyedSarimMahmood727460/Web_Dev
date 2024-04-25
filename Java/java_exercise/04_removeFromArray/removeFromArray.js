const removeFromArray = function(array, ...values) {
    let final_array=[]
    for(let i=0;i<array.length;i++)
    {
        if(!values.includes(array[i]))
        {
            final_array.push(array[i])
        }
    }
    return final_array
};

// Do not edit below this line
module.exports = removeFromArray;
