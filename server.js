const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    //console.log('request made')
    //console.log(req.method)
    //console.log(req.url)

    res.setHeader('Content-Type', 'text/html')

     let path = './views';

     switch(req.url){
        case '/':
            path +='/index.html';
            res.statusCode = 200;
            break;
        case '/about':
                path += '/about.html';
                res.statusCode = 200;
                break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;     

     }

     //Sending back to the browser
     fs.readFile((path),(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{
            res.write(data)
            res.end()
        }
     })



})

const port = 9000;
server.listen(port, 'localhost', () => {
    console.log(`listening request on port ${port}`)
})