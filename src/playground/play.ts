import fs from "fs";
const json = fs.readFileSync("src/playground/data.json");
const convertedJson = JSON.parse(json.toString());
// console.log(convertedJson);

convertedJson.books[3].title = "It's reassigned title";
convertedJson.books[2].description = "it's reassigned description";

console.log(convertedJson);

fs.writeFileSync("src/playground/data.json", JSON.stringify(convertedJson));
