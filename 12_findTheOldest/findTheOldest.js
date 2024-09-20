const findTheOldest = function(peopleArray) {
    const currentYear = new Date().getFullYear();
    let age;
    const oldestAge = peopleArray
    .reduce((previous, next) => { 
        if (!next.yearOfDeath) {
            age = currentYear - next.yearOfBirth;
        } else {
            age = next.yearOfDeath - next.yearOfBirth;
        }
        return previous > age ? previous : age;
    }, 0);

    return peopleArray.filter(person => {
        if (!person.yearOfDeath) {
            age = currentYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if (age === oldestAge) {
            return true;
        }
    })[0];
};

console.log(findTheOldest([
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]));

// Do not edit below this line
module.exports = findTheOldest;
