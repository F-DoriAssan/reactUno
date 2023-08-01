//Importo modulos a utilizar
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");

//configuro motor de vistar con su directorios
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

//app.use
app.use(express.urlencoded({ extended:true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));


//Indice predeterminado /Ruta de inicio
app.get("/", async (req, res)=>{
    try {
        res.render("homepage");
    } catch (e) {
        console.log(e);
    }
});

//Start del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on the port: ${port}`);
});