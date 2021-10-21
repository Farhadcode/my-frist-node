// const express = require('express');
// const app = express()
// const port = process.env.PORT || 3000;

// // const handler = (req, res) => {
// //     res.send('Hello from node');
// // }

// // app.get('/', handler);

// app.get('/', (req, res) => {
//     res.send('Hello from node')
// });

// app.listen(port, () => {
//     console.log('local host listening to port', port);
// })

const express = require('express')
const app = express()

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to our node  service best service in the world ')

});

const users = [
    {
        id: 0,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    },
    {
        id: 1,
        name: "aligzande",
        username: "Bret",
        email: "Sincere@april.biz"
    },
    {
        id: 2,
        name: "Goold man",
        username: "Bret",
        email: "Sincere@april.biz"
    },
    {
        id: 3,
        name: "Leanne bom",
        username: "Bret",
        email: "Sincere@april.biz"
    },
    {
        id: 4,
        name: "yeang hook",
        username: "Bret",
        email: "Sincere@april.biz"
    },
]


app.get('/users/:id', (req, res) => {
    // console.log(req.params.id);

    const id = req.params.id;
    const result = users[id];
    res.send(result)
});

app.get('/users', (req, res) => {
    res.send(users)
});

app.listen(port, () => {
    console.log('local host ', port);
})

