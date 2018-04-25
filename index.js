const express = require("express");
const port = 3000;
const app = express();
let updates = [];
app.use(express.static('public'));
app.use(express.json());
app.post('/updates', (req, res) => {
    if (req.body.clientUpdates) {
        updates = updates.concat(req.body.clientUpdates);
    }
    updates = updates.slice(req.body.length)
    console.log({
        updates: updates
    })
    console.log(`req.body.length ${req.body.length}`)
    res.send({
        updates: updates,
        length: updates.length
    })
});
// Fill in your request handlers here
app.listen(port);