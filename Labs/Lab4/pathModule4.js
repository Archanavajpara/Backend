const path=require('path');

console.log("Directory name: "+path.dirname(__filename));
console.log("File name: "+__filename);
console.log("Base name: "+path.basename(__filename));
console.log("Extension: "+path.extname(__filename));

const finalPath=path.join("users","Archana","documents","file.txt");
console.log("joined path: "+finalPath);

const wrongPath="//folder//subfolder////file.txt";
const cleanPath=path.normalize(wrongPath);
console.log("Normalized path: "+cleanPath);

let inputPath="../users/Archana";
if(path.isAbsolute(inputPath)){
    console.log("The path is absolute.");
}else{
    console.log("The path is relative.");
}

const absolutePath=path.resolve("users","Archana","documents","file.txt");
console.log("resolved Absolute path: "+absolutePath);