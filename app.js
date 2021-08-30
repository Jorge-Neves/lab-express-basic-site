const express = require("express");

const app = express();


app.use(express.static("public"));

app.get("/home", (request, response) => {
    response.sendFile(
        __dirname + "/views/home.html")
});


app.get("/About", (request, response) => {
    //response.send("<h1>I'm a cat</h1>");
    response.sendFile(
        //"/Users/Admin/desktop/labs/moduletwo/code-along/express-hello-world/views/cat-page.html"
        __dirname + "/views/About.html"
    );
});

app.get("/Works", (request, response) => {
    //response.send("<h1>I'm a cat</h1>");
    response.sendFile(
        //"/Users/Admin/desktop/labs/moduletwo/code-along/express-hello-world/views/cat-page.html"
        __dirname + "/views/Works.html"
    );
});

app.get("/Gallery", (request, response) => {
    //response.send("<h1>I'm a cat</h1>");
    response.sendFile(
        //"/Users/Admin/desktop/labs/moduletwo/code-along/express-hello-world/views/cat-page.html"
        __dirname + "/views/Gallery.html"
    );
});

app.listen(5000, () => console.log("listening on port 5000"));










