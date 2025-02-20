const express = require('express');
const app = express();
app.use(express.json());
const libroRouter = require("./router/libroRouter");

app.use("/api",libroRouter);



const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`servidor coerriendo en el ${PORT}`);
});
