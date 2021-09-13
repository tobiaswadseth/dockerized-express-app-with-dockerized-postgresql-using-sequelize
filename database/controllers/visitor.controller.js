const db = require("../sequelize");

const Visitor = db.visitor;

module.exports.create = (visitor) =>
    Visitor.create(visitor, { returning: true })
    .then((newVisitor) => newVisitor)
    .catch((error) => {
        if (error) {
            console.error("Error: ", error.message);
        }
    });


module.exports.findOrCreate = (ip) => 
    Visitor.findOrCreate({
        where: { ip },
        defaults: {
            ip
        }
    })
    .then((visitor) => visitor)
    .catch((error) => {
        if (error) {
            console.error("Error: ", error.message);
        }
    });


module.exports.findAll = () => 
    Visitor.findAll()
    .then((visitors) => visitors)
    .catch((error) => {
        if (error) {
            console.error("Error: ", error.message);
        }
    });


module.exports.findById = (id) => 
    Visitor.findById(id)
    .then((visitor) => visitor)
    .catch((error) => {
        if (error) {
            console.error("Error: ", error.message);
        }
    });


module.exports.findOne = (where) =>
    Visitor.findAll({
        where
    })
    .then((visitors) => {
        if (!visitors) {
            console.warn("No visitor were found");
            return null;
        }
        return visitors[0];
    })
    .catch((error) => {
        if (error) {
            console.error("Error: ", error.message);
        }
    });

module.exports.delete = (where) => 
    Visitor.destroy({
        where
    })
    .then((response) => response)
    .catch((error) => {
        if (error) {
            console.error("Error: ", error.message);
        }
    });

module.exports.update = (visits, ip) =>
    Visitor.update({
        visits: visits + 1
    },
    {
        where: {
            ip
        },
        returning: true
    })
    .then((updatedVisitor) => updatedVisitor)
    .catch((error) => {
        if (error) {
            console.error("Error: ", error.message);
        }
    });