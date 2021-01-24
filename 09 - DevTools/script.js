const header = document.querySelector("h1");
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

// 1. Clearing
console.clear();
console.log("::::::Ex.1 'above^'");
// 2. Interpolated
console.log("::::::Ex.2");
console.log("Hello %s World!","🌎");

// 3. Styled
console.log("::::::Ex.3");
console.log("%c Ala ma kota","font-family:Arial;color:black;background:white");

// 4. Warning
console.log("::::::Ex.4");
console.warn("Warning!");

// 5. Error
console.log("::::::Ex.5");
console.error("Error!");

// 6. Info - it's like regular
console.log("::::::Ex.6");
console.info("Error!");

// 7. Testing
console.log("::::::Ex.7");
console.assert(header.classList.contains('abc'), 'That is wrong!');

// 8. Regular
console.log("::::::Ex.8");
console.log("eskeemos");

// 9. View DOM Elements - log
console.log("::::::Ex.9");
console.log(header);

// 10. View DOM Elements - dir
console.log("::::::Ex.10");
console.dir(header);

// 11. Grouping
console.log("::::::Ex.11");
dogs.forEach((item) => {
    console.groupCollapsed(`${item.name}`);
    console.log(`This is ${item.name}`);
    console.log(`${item.name} is ${item.age} years old`);
    console.log(`${item.name} is ${item.age * 7} dog years old`);
    console.groupEnd(`${item.name}`)
})

// 12. Counting
console.log("::::::Ex.12");
console.count("Mark");
console.count("Steve");
console.count("Ari");
console.count("Steve");
console.count("Ari");
console.count("Ari");

// 13. Table
console.log(":::::::Ex.13");
console.table(dogs)

// 14. Timing
console.log("::::::Ex.14");
console.time("fetching data");
fetch('https://api.github.com/users/eskeemos')
    .then((item) => item.json())
    .then((item) => {
        console.timeEnd("fetching data");
        console.log(item);
    })
