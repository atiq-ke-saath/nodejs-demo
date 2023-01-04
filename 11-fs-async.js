const {readFile, writeFile} = require('fs');

console.log('File Handling Started.');

readFile('./content/first.txt', 'utf-8', (err, data) => {    
    if(err){
        console.log('Error Reading File1');
        return;
    }

    const first = data;

    readFile('./content/second.txt', 'utf-8', (err, data) => {
        if(err) {
            console.log('Error Reading File2');
            return;
        }

        const second = data;

        writeFile('./content/result-async.txt',`The result is: ${first}, ${second}`, 'utf-8', (err) => {
            if(err) {
                console.log('Error Writing File.');
                return;
            }

            console.log('File Created Successfully.');
        })
    })
});

console.log('Next Task Starts Here.');