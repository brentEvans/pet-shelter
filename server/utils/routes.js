const Pets = require('../controllers/pets');

module.exports = (app) => {

    app.get("/pets", Pets.getAll);
    app.post("/pets", Pets.create);
    app.get("/pet/:_id", Pets.getOne);
    app.put("/pet/:_id", Pets.update);
    app.delete("/pet/:_id", Pets.delete);

}







