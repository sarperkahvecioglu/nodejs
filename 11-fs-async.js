

// const { readFile, writeFile } = require('fs');


// console.log("start");
// readFile('./content/first.txt', "utf8", (err, result) => {
//     if(err){
//         console.log(err);
//         return;
//     }
    
//     const first = result
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if(err){
//             return;
//         }

//         const second = result;
//         writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
//             if(err){
//                 return
//             }
//             console.log('done with this');
//         })
//     })
// })

// console.log('starting next task');


const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        return;
    }
    const first = result;

    writeFile("./content/subfolder/test2.txt", `This is what contains first.txt: ${first}`, (err, result) => {
        if(err) {
            return;
        }
        console.log(result);
    });
})