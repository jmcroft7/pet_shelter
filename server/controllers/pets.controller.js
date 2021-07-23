const Pet = require("../models/pet.model");





module.exports.findAllPets = (req, res) => {
    Pet.find({}).sort("type")
        .then(allpets => {
            res.json({ results: allpets })
        })
        .catch(err => {
            res.json(
                { message: "something went wrong getting all the pets", error: err }
            )
        })
}



module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newlyCreatedPet => {
            res.json({ results: newlyCreatedPet })
        })
        .catch(err => {
            res.json(
                { message: "something went wrong creating a new pet", error: err }
            )
        })
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.petId })
        .then(foundPet => {
            res.json({ results: foundPet })
        })
        .catch(err => {
            res.json(
                { message: "something went wrong finding one pet", error: err }
            )
        })
}


module.exports.updatePet = (req, res) => {

    Pet.findOneAndUpdate(
        { _id: req.params.petId },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({ results: updatedPet }))
        .catch(err => {
            res.json(
                { message: "something went wrong updating one pet", error: err }
            )
        })
}


module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.petId })
        .then(deletedPet => res.json({ results: deletedPet }))
        .catch(err => {
            res.json(
                { message: "something went wrong deleting one pet", error: err }
            )
        })
}