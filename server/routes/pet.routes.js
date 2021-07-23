const PetController = require("../controllers/pets.controller");

module.exports = app =>{
    //all pets
    app.get("/pets", PetController.findAllPets)

    //create new pet
    app.post("/pets/create", PetController.createPet)

    //get one pet by id
    app.get("/pets/:petId", PetController.findOnePet)

    //update pet
    app.put("/pets/:petId", PetController.updatePet)

    //delete pet
    app.delete("/pets/:petId", PetController.deletePet)
}