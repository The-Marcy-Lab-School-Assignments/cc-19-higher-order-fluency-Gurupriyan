const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:22}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:21}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:21},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:21}];

const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];
//1
function averageAge (array) {
    return Math.floor(array.map(person => person.age).reduce((a,b) => a+b)/array.length);
    //return array.reduce((a, b) => return {a + b.age}, 0)/;
}
// console.log(averageAge(alumni));

//2
function bananaBread (array) {
    return array.map(person => {
        person.bananaBread = `${person.name} got banana bread at ${person.job}`;
        return person;
        });
}
// console.log(bananaBread(alumni));

//3
function ninetiesBabies(array) {
    return array.filter(person => person.age > 21);
}
// console.log(ninetiesBabies(alumni));

//4
function addSchool (array) {
    return array.map(person => {
        person.school = "The Marcy Lab School";
        return person;
        });
}
// console.log(addSchool(alumni));

//5
function allUseJavaScript (array) {
    return array.every(person => person.language === "JavaScript");
}
// console.log(allUseJavaScript(alumni));


//6
function noVowel (array) {
    const vowels = /[aeiou]/gi;
    return array.map(word => word.replace(vowels, "x"));
}
// console.log(noVowel(animals));

//7
function onlyVowelA (array) {
    return array.filter(word => word.includes("a"));
}
// console.log(onlyVowelA(animals));

//8 
function longerThanSeven (array) {
    return array.some(word => word.length > 7);
}
// console.log(longerThanSeven(animals));

//9
function allFour (array) {
    return array.every(word => word.length === 4);
}
// console.log(allFour(animals));

//10
function concatStrings (array) {
    return array.reduce((a, b) => a + ` ${b}`);
}
// console.log(concatStrings(animals));