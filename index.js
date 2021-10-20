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

app.listen(port, () => {
    console.log('local host ', port);
})

