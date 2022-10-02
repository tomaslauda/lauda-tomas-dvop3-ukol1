let array = ["Lodash","React","Next","Strapi","Axios","Typescript"]
for (let i = 0; i < array.length; i++)
{
    console.log(array[i] + "\n");
}
console.log("\n");
for(let i = 0; i < array.length; i++)
{
    let array_reverse = array.reverse();
    console.log(array_reverse[i] + "\n");
}
console.log("\n");
for(let i = 0; i < array.length; i++)
{
    let array_alph = array.sort();
    console.log(array_alph[i] + "\n");

}
console.log("\n");
var car = {Brand:"Unknown", Model:"Oldest", Year:"2022",};
var {Brand, Model, Year} = car;
console.log( Brand, Model, Year);
console.log("\n");
let random = Math.random() * 555;
console.log("Náhodné číslo je: " + random);