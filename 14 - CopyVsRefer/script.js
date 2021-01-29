// 1. This example shows how variable (age2) behaviour 
// in case in which we update first variable (age1) 
console.warn("Ex. 1");
let age1 = 100;
let age2 = age1;
console.log(age1, age2);
age1 = 150;
console.log(age1, age2);

// 2. This example shows how array(team1) behaviour 
// in case in which we update array(team2) 
console.warn("Ex. 2");
const team1 = ["Łukasz","Jakub","Miłosz","Kamil"];
const team2 = team1;
console.log(team1,team2);
team2[0] = "Alicja";
console.log(team1,team2);

// 3. How to fix example above to be correct?
// Have some look in this solves below
console.warn("Ex. 3");
const squad1 = ["Łukasz","Jakub","Miłosz","Kamil"];
const squad2 = squad1.slice();
console.log(squad1,squad2);
squad2[0] = "Alicja";
console.log(squad1,squad2);
console.log("--------------------------------------------");
const players1 = ["Łukasz","Jakub","Miłosz","Kamil"];
const players2 = [...players1];
console.log(players1,players2);
players2[0] = "Alicja";
console.log(players1,players2);
console.log("--------------------------------------------");
const class1 = ["Łukasz","Jakub","Miłosz","Kamil"];
const class2 = Array.from(class1);
console.log(class1,class2);
class2[0] = "Alicja";
console.log(class1,class2);
console.log("--------------------------------------------");
const gang1 = ["Łukasz","Jakub","Miłosz","Kamil"];
const gang2 = [].concat(gang1);
console.log(gang1,gang2);
gang2[0] = "Alicja";
console.log(gang1,gang2);

// 4. How to also avoid this problem with objects? 
// Look at the solution below
console.warn("Ex. 4");
const person1 = {name:"Luki", age:17};
const person2 = Object.assign({},person1);
console.log(person1,person2);
person2.name = "Lukito";
console.log(person1,person2);

// 5. Solving this problem with objects with deep level 2 or high
// Example below will answer on question above
console.warn("Ex. 5");
const cap1 = {
    name: "lucas",
    social : {
        twitter : "@luca",
        facebook : "lucas.eske"
    }
}
const cap2 = JSON.parse(JSON.stringify(cap1));
console.log(cap1.social, cap2.social);
cap2.social.twitter = "@lucaco";
console.log(cap1.social, cap2.social);
