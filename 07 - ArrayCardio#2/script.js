const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }];

// 1. Is at least one person 19?
    console.warn("Ex. 1 : Is at least one person 19?");
    const a1 = people.some((item) => ((new Date().getFullYear()) - item.year) >= 19);
    console.log(a1);

// 2. Is everyone 19?
    console.warn("Ex. 2 : Is everyone 19?");
    const a2 = people.every((item) => ((new Date()).getFullYear() - item.year) >= 19);
    console.log(a2);

// 3. Find the comment with the ID of 823423
    console.warn("Ex. 3 : Find the comment with the ID of 823423");
    const a3 = comments.find((item) => item.id == 823423)
    console.log(a3);

// 4. Find index of the comment with the ID of 823423
    console.warn("Ex. 4 : Find index of the comment with the ID of 823423");
    const a4 = comments.findIndex((item) =>  item.id == 823423)
    console.log(a4);

// 5. Delete the comment with the ID of 823423
    console.warn("Ex. 5 : Create a new array without the comment with the ID of 823423");
    const a5 = [
        ...comments.slice(0,a4),
        ...comments.slice(a4 + 1)
    ]
    console.log(a5);

