const os=require('os');

console.log("OS");
console.log("Hostname: "+os.hostname());
console.log("Operating System: "+os.type());
console.log("Release: "+os.release());
console.log("Platform: "+os.platform());
console.log("Architecture: "+os.arch());

function convertToGB(bytes){
    return (bytes/(1024*1024*1024)).toFixed(2)+" GB";
}
console.log("Total Memory: "+convertToGB(os.totalmem()));
console.log("Free Memory: "+convertToGB(os.freemem()));

const cpus=os.cpus();
console.log("number of cpu cores : ",cpus.length);
cpus.forEach((core,index)=>{
    console.log(`Core ${index+1}: ${core.model} - ${core.speed} MHz`);
})

const network = os.networkInterfaces();
console.log("\n Network interfaces :")
console.log(network);
