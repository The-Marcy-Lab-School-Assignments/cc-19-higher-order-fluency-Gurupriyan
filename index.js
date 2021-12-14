const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:22}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:21}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:21},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:21}];

//1
function averageAge (array) {
    let arrayOfAge = array.map(person => person.age);
    return Math.floor(arrayOfAge.reduce((a,b) => a+b)/arrayOfAge.length);
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
