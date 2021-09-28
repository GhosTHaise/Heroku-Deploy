const app = require("express")();
const res = require("express/lib/response")

const PORT = process.env.PORT || 3000

app.get("",(req,res) => {
    res.send("<h1>I am the GhosT</h1>");
});

app.listen(PORT,() => {
    console.log(`App up at port ${PORT}`)
})