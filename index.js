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

const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

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

// use dynamic API
app.get('/users/:id', (req, res) => {
    // console.log(req.params.id);

    const id = req.params.id;
    const result = users[id];
    res.send(result)
});


// use query parameter

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

})

// app  method or http method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// app.get('/users', (req, res) => {
//     console.log(req.query);
//     res.send(users)
// })

app.get('/users', (req, res) => {
    res.send(users)
});


app.get('/product/mango/fujli', (req, res) => {
    res.send('fujli is the biges mango ')
})

app.listen(port, () => {
    console.log('local host ', port);
})

