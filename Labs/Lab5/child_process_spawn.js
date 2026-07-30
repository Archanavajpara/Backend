// Write a program that uses child_process.spawn() to run the command to print files and folders of current directory.

const child_process = require('child_process');


const cmd = child_process.spawn('cmd',['/c','dir']);

cmd.stdout.on('data',(data)=>{      
    console.log(`stdout: ${data}`);
});

cmd.stderr.on('data',(data)=>{
    console.log(`stderr: ${data}`);
});

console.log("current working directory: "+process.cwd());
