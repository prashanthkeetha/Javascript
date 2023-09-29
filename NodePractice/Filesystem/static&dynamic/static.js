/*const express = require('express');
const app = express();

app.use(express.json());
const person = {
    name: "prashanth",
    address: "ibd",
    work: "intern",
    Description: "trying to work on node.js Express"
};

app.get('/identity',function(req,res){
    res.send(person);
});
 
app.listen(3288);
console.log('server is listening to the port');*/

const { application } = require("express");

/*const express = require('express');
const app = express();

app.use(express.json());
const person ={
    name: "prashanth",
    address: "ibd",
    work: "intern",
    Description: "trying to work on node.js Express"
}

app.get('/identities',function(req,res){
    res.send(req.body.name);
});

app.listen(3288);
console.log('server is listening to the port');*/


/*const express = require('express');
const app = express();

const name = 'ibridge';

const person = {
    name: "prashanth",
    address: "ibd",
    work: "intern",
    Description: "trying to work on node.js Express"
}

app.get('/identities',function(req,res){
    res.send(req.person);
})
 app.listen(3211);
 console.log('listening to the port');*/


/*const express = require('express');
const app = express();

let name = 'ibridge'; // Initialize the name

const person = {
    name: "prashanth",
    address: "ibd",
    work: "intern",
    Description: "trying to work on node.js Express"
}

app.use(express.json()); // Enable JSON parsing middleware

app.get('/identities', (req, res) => {
    // Use the dynamically updated name
    person.name = name;
    res.json(person);
});

app.listen(3211, () => {
    console.log('Listening to the port');
});*/

/*const express = require('express');
const app = express();

person = ['Prashanth','IBD intern','Trying to work on nodejs express']


app.get('/info',function(req,res){
    res.send(person);
});

app.listen(3211);
console.log(person.length)
console.log('server is listening');*/

/*const express = require('express');
const app = express();

const sub = ['chemistry'];

const method = [
    'post',
    'get',
    'put',
    'delete'
];

app.get('/methods',function(req,res){
    res.send(sub)
})

app.listen(3212);
console.log(method.length);
console.log('server lisenting to the poet');*/


/*const express = require('express');
const app = express();

const number = 12;

app.get('/number',function(req,res){
    res.send(number);
});
app.listen(3552);
console.log(number);
console.log('server is working');*/

// const name = 'prashanth';

// function myFunction() {
//     // Reference the global variable 'name' here
//     // name = 'ibridge';
//     console.log(name);
// }

// myFunction(); 
// console.log(name); 

// let product = 'application';

// function building(){
//     product = 'campaign'
//     console.log(product)
// }
// building();
// console.log(product);

// var war = 'ukrian';

// function nato (){
//     war = 'russia';
//     console.log(war);
// }
// nato();
// console.log(war);

/*const express = require('express');
const app = express();

app.use(express.json());

const name = ''

function myFunction(req, res) {
    name = req.body.name;
    res.send(req.body.name); 
}

app.get('/name', myFunction); 

console.log(name);

app.listen(3222, () => {
    console.log('server is listening to the port');
});*/


/*let express = require('express');
let router = express();
router.use(express.json());
let name = ''

function myFunction(req,res){
    name = req.body.name;
    res.send(req.body.name);
}

router.get('/name',myFunction);

console.log(name);

router.listen(3222, () => {
    console.log('server listening to the port');
});*/

/*var express = require('express');
var app = express();

app.use(express.json());

let items = ''

function myapplication(req,res){
    items = req.body.items;
    res.send(req.body.items);
}

app.get('/projection',myapplication);

console.log(items);

app.listen(3141, () =>{
    console.log('server is listening');
})*/


/*const express = require('express');
const app = express();

app.use(express.json());

function myFunction(req,res){
    if (req.body) {
        res.send(req.body);
    }else{
        res.status(400).send('Bad request: Request body is empty');
    }
    
}

app.get('/conditions',myFunction);

console.log(myFunction);

app.listen(5616,() => {
    console.log('server is listening');
})*/

/*let express = require('express');
const app = express();

app.use(express.json());

function junction(req,res){
    if(req.body){
        res.send(req.body);
    }else{
        res.status(400).send('Bad request');
    }
}

app.get('/condition',junction);

app.listen(5616,() => {
    console.log('server is working');
})*/

/*var express = require('express');
var app = express();

app.use(express.json());

function verb(req,res){
    if(req.body){
        res.send(req.body);
    }else{
        res.status(400).send('bad request');
    }
}

app.get('/statement',verb);

app.listen(5616, () => {
    console.log('server is working');
})*/

/*const express = require('express');
const app = express();

app.use(express.json());
const name = ''

function myFunction(req,res){
    name = req.body.name;
    res.send(req.body.name);
}

app.get('/name/checkname',myFunction,function(req,res){
    if (name) {
        res.send('name is set');
    }else{
        res.send('name is empty')
    }
});


app.listen(5222, () => {
    console.log('server listening to the port');
});*/


/*let express = require('express');
let app = express();

app.use(express.json());
let description = ''

function myFunction(req,res){
    description = req.body.description;
    res.send(req.body.description);
}

app.get('/name',myFunction,function(req,res){
    if(description){
        console.log('Data is correct');
        res.send('Data is correct')
    }else{
        console.log('Data is not correct');
        res.send('data is not correct')
    }
});

app.listen(5222, () =>{
    console.log('server is listening');
})*/



// let express = require('express');
// let app = express();

// app.use(express.json());
// let description = '';

// function myFunction(req, res) {
//     description = req.body.description;
//     if (description) {
//         console.log('Data is correct');
//         res.send('Data is correct');
//     } else {
//         console.log('Data is not correct');
//         res.send('Data is not correct');
//     }
// }

// app.get('/name', myFunction);

// app.listen(5222, () => {
//     console.log('Server is listening');
// });


var express = require('express');
var app = express();

app.use(express.json());
var description = ''; 

function myFunction(req, res) {
    description = req.body.things;
    if (description) { 
        console.log('Data is correct');
        res.send('Data is correct');
    } else {
        console.log('Data is not correct');
        res.send('Data is not correct');
    }
}

app.get('/name', myFunction);

app.listen(5222, function () {
    console.log('Server is listening');
});









 

