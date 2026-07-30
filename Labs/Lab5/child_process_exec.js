// Write a Node.js program using child_process.exec() to run the shell command to check the current version of node

const child_process = require('child_process');


child_process.exec('node -v', (error, stdout, stderr) => {
    if(error)
    {
        console.log(error);
        return;
    }
    console.log(stdout);
});
