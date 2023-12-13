const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

// rote homegae
app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'success',
        data: [
            {
                name: 'Đặng Quốc Việt 1',
                age: 29
            }
        ]
    });
});

module.exports = app;