const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank']; 

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

// 1. Filter the list of inventors for those who were born in the 1500'

console.warn("Ex. 1");
const a1 = inventors.filter((item) => (item.year >= 1500) && (item.year < 1600));
console.log(a1);

// 2. Give us an array of the inventor first and last names

console.warn("Ex. 2");
const a2 = inventors.map((item) => `${item.first} ${item.last}`);
console.log(a2);

// 3. Sort the inventors by birthdate, oldest to youngest

console.warn("Ex. 3");
const a3 = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.log(a3);

// 4. How many years did all the inventors live?

console.warn("Ex. 4");
const a4 = inventors.reduce((total,item) => {
    return total + (item.passed - item.year)
},0);
console.log(a4);

// 5. Sort the inventors by years lived

console.warn("Ex. 5");
const a5 = inventors.sort(function(a,b){
    var lastInventor = a.passed - a.year;
    var nextInventor = b.passed - b.year;
    return lastInventor > nextInventor ? -1 : 1;
});
console.log(a5);

// 6. Sort the people alphabetically by last name

console.warn("Ex. 6");
const a6 = people.sort((lastOne,nextOne) => {
    var [aLast,aFirst] = lastOne.split(", ");
    var [bLast,bFirst] = nextOne.split(", ");
    return aLast > bLast ? 1 : -1;
})
console.log(a6);

// 7. Sum up the instances of each of array data

console.warn("Ex. 7");
const a7 = data.reduce((obj,item) => {
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
},{});
console.log(a7);

// 8. Create a list of Boulevards in Paris that contain 'de' anywhere in the name 
//    https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//    This example require page above.

// console.warn("Ex. 8");
// const container = document.querySelector(".mw-category");
// const links = Array.from(container.querySelectorAll("a"));
// const a8 = links 
//         .map((item) => item.textContent)
//         .filter((item) => item.includes("de"));
// console.log(a8);
