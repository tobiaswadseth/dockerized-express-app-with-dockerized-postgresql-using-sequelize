const express = require("express");
require("dotenv").config();

const db = require("./database/sequelize");
const VisitorController = require("./database/controllers/visitor.controller");

const app = express();

app.use(async (request, response, next) => {
    const ip = request.headers["x-forwarded-for"] || request.socket.remoteAddress;
    const [visitor, created] = await VisitorController.findOrCreate(ip);
    if (!created) {
        const [_, updated] = await VisitorController.update(visitor.visits, visitor.ip);
        console.log(updated);
    }
    next();
});

app.use(express.static("./public"));

db.sequelize.sync().then(() => {
    const PORT = process.env.PORT || 80;
    
    app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
});