const moment = require('moment');
const os = require('os');
const fs = require('fs');
const a = require('./func');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!!!');
        res.end();
    }
    if (req.url === '/api/users') {
        fs.readFile('dbd.json', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.write(data);
                res.end();
            }
        });
    }
});
// CRUD - Create Read Update Delete

server.listen(3000);
server.on('connection', (socket) => {
    console.log('New connection!');
});
// console.log(a(5));
// const users = [{name: 'Ann', age: '20'}];

// fs.writeFile('db.json', JSON.stringify(users), (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// fs.readFile('db.json', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         const list = JSON.parse(data);
//         const user = {name: 'Vasya', age: 15};
//         list.push(user);
//
//         fs.writeFile('db.json', JSON.stringify(list), (err) => {
//             if (err) {
//                 console.log(err);
//             }
//         });
//     }
// });

// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.type());
