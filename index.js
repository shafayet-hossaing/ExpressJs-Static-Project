const path = require('path')
const express = require('express');
const app = express();
const port = 2000

const staticPath = path.join(__dirname, '../public')

// Builtin middleware
app.use(express.static(staticPath))

app.get("/", (req, res) => {
    res.send("Hello")
})


// Listener
app.listen(port, () => {
    console.log(`Listening to ${port}`);
})