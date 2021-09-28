const app = require("express")();
const res = require("express/lib/response")

const PORT = process.env.PORT || 3000

app.get("",(req,res) => {
    res.send("hello World");
});

app.listen(PORT,() => {
    console.log(`App up at port ${PORT}`)
})