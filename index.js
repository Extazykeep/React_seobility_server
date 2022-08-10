import express from 'express';
const port = 1337;
const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );

    next();
});

app.use(express.json());

app.post('/usersdata', (req, res) => {
    let number = Math.random();
    setTimeout(() => {
        if (number > 0.5) {
            res.status(403).send('not enough rights');
        } else
            res.status(200).send(
                JSON.stringify({ message: 'succesfuly got user data' })
            );
    }, 1000);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`);
});
