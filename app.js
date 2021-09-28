const app = require("express")();
const res = require("express/lib/response")

const PORT = process.env.PORT || 3000

app.get("",(req,res) => {
<<<<<<< HEAD
    res.send("<h1>I am the GhosT</h1>");
=======
    res.send("<h1>Fitiavana Sambatra<h1>");
>>>>>>> 81e381c12c67bd1b8e539ce31dfc8bdc73bb80c6
});

app.listen(PORT,() => {
    console.log(`App up at port ${PORT}`)
})
