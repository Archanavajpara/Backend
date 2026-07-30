const url=require('url');

const inputUrl="https://localhost:8090/users/Archana/documents/file.txt";

const parsed=new URL(inputUrl);
console.log(parsed);

console.log("protocol: "+parsed.protocol);
console.log("hostname: "+parsed.hostname);
console.log("pathname: "+parsed.pathname);
console.log("Query Params: "+parsed.searchParams);
console.log("Query ID: "+parsed.searchParams.get('id'));
console.log("Query Name: "+parsed.searchParams.get('name'));
console.log("Port: "+parsed.port);

const myURL=new URL("https://example.com");
myURL.pathname="/users/Archana/documents/file.txt";
myURL.searchParams.append("id","123");
myURL.searchParams.append("color","Blue");

console.log("Final URL: "+myURL);