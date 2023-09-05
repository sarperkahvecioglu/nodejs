// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(res);
//     if(req.url === "/"){
//         res.end(`
//             <h1>Welcome to our home page</h1>
//         `)
//     }
    
//     else if(req.url === "/about"){
//         res.end('Here is our short history')
//     }

//     else {
//         res.end(`
//         <h1>Oops!</h1>
//         <a href="/">Back home</a>
//     `)
//     }
// })

// server.listen(4001)


const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end(
            `
            <h1>Home page</h1>
            `
        );
    }
    else if(req.url === "/decktopus"){
        res.end('Welcome to decktopus')
    }
    else{
        
        res.end(`
            <h1>Invalid page</h1>
            <a href="/">Return home</a>
        `)
    }
})

server.listen(1400);