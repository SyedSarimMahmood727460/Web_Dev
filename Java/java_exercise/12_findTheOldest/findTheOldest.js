const findTheOldest = function(array) {
    let age=0
    let oldperson=null
    for(let i=0;i<array.length;i++)
    {
        let people=array[i]
        let tempage= getAge(people.yearOfBirth,people.yearOfDeath)
        if(tempage > age)
        {
            age=tempage
            oldperson=people
        }
    }
    return oldperson
};

function getAge(birth, death) 
{
    if (!death) 
    {
      death = new Date().getFullYear();
    }
    return death - birth;
};
// Do not edit below this line
module.exports = findTheOldest;
